class ArrowDownEvent {
  constructor(arrowElemClass) {
    this.arrowAnimate = document.querySelector(`.${arrowElemClass}`);
    this.scrollToElem = document.querySelector('.bluetooth__desc');

    this._triggers();
  }

  _triggers() {
    // fix z-index bug
    window.addEventListener('scroll', (e) => {
      if (this.arrowAnimate && window.scrollY > 350) {
        this.arrowAnimate.style.animation = `none`;
      } else {
        this.arrowAnimate.style.animation = `bounce 2s infinite ease-in`;
      }
    });

    if (this.arrowAnimate) {
      this.arrowAnimate.addEventListener('click', (e) => {
        e.preventDefault();
        this.scrollToElem.scrollIntoView({block: "center", behavior: "smooth"});
      });
    }
  }
}

export default ArrowDownEvent;
