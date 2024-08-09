import type HLJS from "highlight.js";
import getCssLanguage from "highlight.js/lib/languages/css";
import getXmlLanguage from "highlight.js/lib/languages/xml";

declare global {
  const HighlightJS: typeof HLJS;
}

class CodeSample extends HTMLDivElement {
  static registerLanguages = () => {
    HighlightJS.registerLanguage("html", getXmlLanguage);
    HighlightJS.registerLanguage("css", getCssLanguage);
    this.registerLanguages = () => {};
  };

  private highlight() {
    const codeElem = this.querySelector("code");
    if (codeElem!.dataset["highlighted"] !== "yes") {
      HighlightJS.highlightElement(codeElem!);
    }
  }

  connectedCallback() {
    CodeSample.registerLanguages();

    let codeElem = this.getCodeElement();
    if (codeElem) {
      this.highlight();
    } else {
      const interval = setInterval(() => {
        codeElem = this.getCodeElement();
        if (codeElem) {
          this.highlight();
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
