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
          api.triggerEvent(document.body, "htmx:beforeMetaMerge", evt.detail)
        ) {
          mergeHead(serverResponse);
          api.triggerEvent(document.body, "htmx:afterMetaMerge", evt.detail);
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
          api.triggerEvent(document.body, "htmx:beforeMetaMerge", evt.detail)
        ) {
          if (evt.detail.cacheMiss) {
            mergeHead(evt.detail.serverResponse);
          } else {
            mergeHead(evt.detail.item.head);
          }
          api.triggerEvent(document.body, "htmx:afterMetaMerge", evt.detail);
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
    const headHtml = newContent.substring(headStart, headEnd + 7);
    const parsed = new DOMParser().parseFromString(headHtml, "text/html");
    const metaTags = parsed.head.querySelectorAll("meta");
    const existingTags = Array.from(
      document.head.querySelectorAll("meta"),
    ) as HTMLMetaElement[];

    const presentNames: string[] = [];
    for (let i = 0; i < metaTags.length; i++) {
      const newTag = metaTags[i]! as HTMLMetaElement;
      const name = newTag.name;
      if (!name) continue;
      presentNames.push(name);

      const existingTag = existingTags.find(
        (tag) => tag.name === name,
      );
      if (existingTag) {
        if (existingTag.outerHTML !== newTag.outerHTML) {
          existingTag.replaceWith(newTag);
        }
      } else {
        document.head.appendChild(newTag);
      }
    }

    for (let i = 0; i < existingTags.length; i++) {
      const existingTag = existingTags[i]!;
      const name = existingTag.name;
      if (!name) continue;
      if (!presentNames.includes(name)) {
        existingTag.remove();
      }
    }
  }
}
