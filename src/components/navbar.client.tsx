import type HTMX from "htmx.org";

declare global {
  const htmx: typeof HTMX;
}

let MobileNavbarModal: HTMLDialogElement | null = null;

const initMobileMenu = () => {
  const dialog = document.querySelector("dialog")!;
  const btnContainer = dialog.querySelector(".left-navbar-mobile-overlay")!;

  const btn = document.querySelector(".navbar-mobile-btn")!;
  btn.addEventListener("click", () => {
    dialog.showModal();
  });

  const backdropArea = document.querySelector(".navbar-overlay-backdrop")!;
  backdropArea.addEventListener("click", () => {
    backdropArea.animate(
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
    const animation = btnContainer.animate(
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
    animation.onfinish = () => dialog.close();
  });

  MobileNavbarModal = dialog;
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

    MobileNavbarModal?.close();
  };

  connectedCallback() {
    htmx.on("htmx:pushedIntoHistory", this.onHistoryPush);
  }

  disconnectedCallback() {
    htmx.off("htmx:pushedIntoHistory", this.onHistoryPush);
  }
}

window.customElements.define("navbar-button", NavbarButton, { extends: "a" });
window.addEventListener("load", initMobileMenu);
