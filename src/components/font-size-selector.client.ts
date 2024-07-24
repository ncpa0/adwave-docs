class FontSizeSelector extends HTMLDivElement {
  currentFontSize = 16;
  previewElement!: HTMLButtonElement;

  connectedCallback() {
    const browserDefault = this.currentFontSize = this.getBrowserDefaultFontSize();
    this.loadFromLocalStorage();

    const btnDecrease = this.querySelector("#btn-decrease")!;
    const btnIncrease = this.querySelector("#btn-increase")!;
    this.previewElement = this.querySelector(".font-size-preview") as HTMLButtonElement;

    btnDecrease.addEventListener("click", this.handleDecrease);
    btnIncrease.addEventListener("click", this.handleIncrease);

    if (browserDefault !== this.currentFontSize) {
      this.setFontSize(this.currentFontSize);
    } else {
      this.setSizePreview(this.currentFontSize);
    }
  }

  getBrowserDefaultFontSize() {
    const html = document.querySelector("html")!;
    const computedStyle = getComputedStyle(html);
    const fontSize = computedStyle.getPropertyValue("font-size");
    return parseFloat(fontSize);
  }

  loadFromLocalStorage() {
    const fontSize = localStorage.getItem("font-size");
    if (fontSize) {
      this.currentFontSize = parseInt(fontSize);
    }
  }

  saveToLocalStorage() {
    localStorage.setItem("font-size", this.currentFontSize.toString());
  }

  setFontSize(fontSize: number) {
    this.currentFontSize = fontSize;
    document.body.style.fontSize = this.currentFontSize + "px";
    this.setSizePreview(this.currentFontSize);
    this.saveToLocalStorage();
  }

  setSizePreview(fontSize: number) {
    this.previewElement.innerText = `${fontSize}px`;
  }

  handleDecrease = () => {
    this.setFontSize(this.currentFontSize - 1);
  };

  handleIncrease = () => {
    this.setFontSize(this.currentFontSize + 1);
  };
}

window.customElements.define("font-size-selector", FontSizeSelector, { extends: "div" });
