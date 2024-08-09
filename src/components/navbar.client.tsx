import type HTMX from "htmx.org";

declare global {
  const htmx: typeof HTMX;
}

class MobileMenu {
  dialog;
  btnContainer;
  btn;
  backdropArea;
  closingAnimation: Animation | null = null;

  constructor() {
    this.dialog = document.querySelector("dialog")!;
    this.btnContainer = this.dialog.querySelector(
      ".left-navbar-mobile-overlay",
    )!;
    this.btn = document.querySelector(".navbar-mobile-btn")!;
    this.backdropArea = document.querySelector(".navbar-overlay-backdrop")!;

    this.btn.addEventListener("click", () => {
      this.dialog.showModal();
    });

    this.backdropArea.addEventListener("click", () => {
      this.close();
    });

    htmx.on("htmx:pushedIntoHistory", () => {
      this.close();
    });
  }

  close() {
    if (this.closingAnimation || !this.dialog.open) {
      return;
    }

    this.backdropArea.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 300,
      },
    );
    this.closingAnimation = this.btnContainer.animate(
      [
        {
          left: "0%",
        },
        {
          left: "-66%",
        },
      ],
      {
        duration: 250,
      },
    );

    this.closingAnimation.onfinish = () => {
      this.closingAnimation = null;
      this.dialog.close();
    };
  }
}

let mobileMenu: MobileMenu | null = null;
const initMobileMenu = () => {
  mobileMenu = new MobileMenu();
};

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
    this.addEventListener("mousedown", () => {
      mobileMenu?.close();
    });
  }

  disconnectedCallback() {
    htmx.off("htmx:pushedIntoHistory", this.onHistoryPush);
  }
}

window.customElements.define("navbar-button", NavbarButton, { extends: "a" });
window.addEventListener("load", initMobileMenu);
