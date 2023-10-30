import type HLJS from "highlight.js";
import getCssLanguage from "highlight.js/lib/languages/css.js";
import getXmlLanguage from "highlight.js/lib/languages/xml.js";

declare global {
  const HighlightJS: typeof HLJS;
}

class CodeSample extends HTMLDivElement {
  connectedCallback() {
    HighlightJS.registerLanguage("html", getXmlLanguage);
    HighlightJS.registerLanguage("css", getCssLanguage);
    HighlightJS.highlightElement(this.querySelector("code")!);
  }
}

HighlightJS.initHighlightingOnLoad();

window.customElements.define("code-sample", CodeSample, { extends: "div" });
