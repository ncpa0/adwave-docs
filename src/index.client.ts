import "./components/font-size-selector.client.js";
import "./components/navbar.client.js";
import "./components/theme-switcher.client.js";
import "./prism-theme-loader.client.js";
import "./service-workers/register.client.ts";

declare global {
  interface ViewTransition {
    finished: Promise<boolean>;
    ready: Promise<boolean>;
    updateCallbackDone: Promise<any>;
    skipTransition(): void;
  }

  interface Document {
    startViewTransition(
      updateCallback: () => void | Promise<void>,
    ): ViewTransition;
  }
}

// don't use view transition api on mobile
if (typeof document.startViewTransition === "function") {
  const original = document.startViewTransition.bind(document);
  document.startViewTransition = (updateCallback) => {
    if (window.innerWidth > 830) {
      return original(updateCallback);
    }

    return {
      finished: Promise.resolve(true),
      ready: Promise.resolve(true),
      updateCallbackDone: updateCallback() ?? Promise.resolve(),
      skipTransition() {},
    };
  };
}
