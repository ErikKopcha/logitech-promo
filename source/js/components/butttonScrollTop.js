class ButtonScrollTop {
  constructor(buttonId) {
    this.buttonScrollTop = document.getElementById(buttonId);

    if (!this.buttonScrollTop) {
      console.error('button is not defined');
      return;
    }

    this._triggers();
  }

  _triggers() {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 350) {
        this.buttonScrollTop.style.transform = `scale(1)`;
      } else {
        this.buttonScrollTop.style.transform = `scale(0)`;
      }
    });

    this.buttonScrollTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
}

export default ButtonScrollTop;
