import type HTMX from "htmx.org";

declare global {
  const htmx: typeof HTMX;
}

class NavbarButton extends HTMLAnchorElement {
  onHistoryPush = (e: Event) => {
    const { path } = (e as CustomEvent<{ path: string }>).detail;
    const href = this.getAttribute("href");
    const innerBtn = this.querySelector("button")!;

    if (path === href) {
      innerBtn.classList.add("active");
    } else {
      innerBtn.classList.remove("active");
    }
  };

  connectedCallback() {
    htmx.on("htmx:pushedIntoHistory", this.onHistoryPush);
  }

  disconnectedCallback() {
    htmx.off("htmx:pushedIntoHistory", this.onHistoryPush);
  }
}

window.customElements.define("navbar-button", NavbarButton, { extends: "a" });
