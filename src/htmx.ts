import htmx from "htmx.org";

Object.defineProperty(window, "htmx", {
  value: htmx,
  writable: false,
  configurable: false,
  enumerable: false,
});

// @ts-ignore
import("htmx.org/dist/ext/preload");
