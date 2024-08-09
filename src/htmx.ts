import htmx from "htmx.org";
// @ts-ignore
import("htmx.org/dist/ext/preload");

Object.defineProperty(window, "htmx", {
  value: htmx,
  writable: false,
  configurable: false,
  enumerable: false,
});

htmx.defineExtension("merge-meta", {
  // @ts-expect-error
  init(api) {
    htmx.on(
      "htmx:afterSwap",
      // @ts-expect-error
      function(
        evt: CustomEvent<{ xhr: { response: string }; boosted: boolean }>,
      ) {
        var serverResponse = evt.detail.xhr.response;
        if (
          api.triggerEvent(document.body, "htmx:beforeHeadMerge", evt.detail)
        ) {
          mergeHead(serverResponse);
        }
      },
    );

    htmx.on(
      "htmx:historyRestore",
      // @ts-expect-error
      function(
        evt: CustomEvent<
          { cacheMiss: boolean; serverResponse: string; item: { head: string } }
        >,
      ) {
        if (
          api.triggerEvent(document.body, "htmx:beforeHeadMerge", evt.detail)
        ) {
          if (evt.detail.cacheMiss) {
            mergeHead(evt.detail.serverResponse);
          } else {
            mergeHead(evt.detail.item.head);
          }
        }
      },
    );

    htmx.on(
      "htmx:historyItemCreated",
      // @ts-expect-error
      function(evt: CustomEvent<{ item: { head: string } }>) {
        var historyItem = evt.detail.item;
        historyItem.head = document.head.outerHTML;
      },
    );
  },
});

function mergeHead(newContent: string) {
  const headStart = newContent.indexOf("<head>");
  if (headStart !== -1) {
    const headEnd = newContent.indexOf("</head>", headStart);
    const headHtml = newContent.substring(headStart, headEnd);
    const parsed = new DOMParser().parseFromString(headHtml, "text/html");
    const metaTags = parsed.head.querySelectorAll("meta");

    for (let i = 0; i < metaTags.length; i++) {
      const newTag = metaTags[i]!;
      const name = newTag.getAttribute("name");
      if (!name) continue;

      const existingTag = document.head.querySelector(
        `meta[name="${name}"]`,
      );
      if (existingTag) {
        if (existingTag.outerHTML !== newTag.outerHTML) {
          existingTag.replaceWith(newTag);
        }
      } else {
        document.head.appendChild(newTag);
      }
    }
  }
}
