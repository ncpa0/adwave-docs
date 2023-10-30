class FontSizeSelector extends HTMLDivElement {
  currentFontSize = 20;
  previewElement!: HTMLInputElement;

  connectedCallback() {
    this.loadFromLocalStorage();

    const btnDecrease = this.querySelector("#btn-decrease")!;
    const btnIncrease = this.querySelector("#btn-increase")!;
    this.previewElement = this.querySelector("input") as HTMLInputElement;

    btnDecrease.addEventListener("click", this.handleDecrease);
    btnIncrease.addEventListener("click", this.handleIncrease);

    this.setFontSize(this.currentFontSize);
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
    this.saveToLocalStorage();
    document.body.style.fontSize = this.currentFontSize + "px";
    this.previewElement.value = `${this.currentFontSize}px`;
  }

  handleDecrease = () => {
    this.setFontSize(this.currentFontSize - 1);
  };

  handleIncrease = () => {
    this.setFontSize(this.currentFontSize + 1);
  };
}

window.customElements.define("font-size-selector", FontSizeSelector, { extends: "div" });
