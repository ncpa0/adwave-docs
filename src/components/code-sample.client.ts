import type HLJS from "highlight.js";
import getCssLanguage from "highlight.js/lib/languages/css";
import getXmlLanguage from "highlight.js/lib/languages/xml";

declare global {
  const HighlightJS: typeof HLJS;
}

class CodeSample extends HTMLDivElement {
  connectedCallback() {
    HighlightJS.registerLanguage("html", getXmlLanguage);
    HighlightJS.registerLanguage("css", getCssLanguage);

    let codeElem = this.getCodeElement();
    if (codeElem) {
      HighlightJS.highlightElement(this.querySelector("code")!);
    } else {
      const interval = setInterval(() => {
        codeElem = this.getCodeElement();
        if (codeElem) {
          HighlightJS.highlightElement(this.querySelector("code")!);
          clearInterval(interval);
        }
      }, 10);
    }
  }

  private getCodeElement() {
    return this.querySelector("code");
  }
}

window.customElements.define("code-sample", CodeSample, { extends: "div" });
