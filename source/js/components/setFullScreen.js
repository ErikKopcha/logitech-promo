class SetFullScreenSection {
  constructor(sectionClass, headerClass) {
    this.section = document.querySelector(`.${sectionClass}`);
    this.header = document.querySelector(`.${headerClass}`);

    this._setHeight();
  }

  _setHeight() {
    this.section.style.minHeight = `calc(100vh - ${this.header.offsetHeight}px)`;
  }
}
export default SetFullScreenSection;
