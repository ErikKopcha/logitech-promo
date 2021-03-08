class BurgerMenu {
  constructor(btnId) {
    this.btnBurger = document.getElementById(btnId);
    this.header = document.querySelectorAll('.header__logo');
    this.nav = document.querySelectorAll('nav');
    this.navSmall = document.querySelector('.nav-small');
    this.arrowAnimate = document.querySelector('.productive__arrow-down');

    this._triggers();
  }

  _navigationEvents() {
    this.nav.forEach(item => {
      item.addEventListener('click', (e) => {
        if (this.btnBurger && this.btnBurger.classList.contains('close')) {
          this.btnBurger.click();
        }

        switch (e.target.dataset.nav) {
          case 'bluetooth':
            this._scrollToElement(document.querySelector('[data-section="bluetooth"]'));
            break;
          case 'landscape':
            this._scrollToElement(document.querySelector('[data-section="landscape"]'));
            break;
          case 'multi':
            this._scrollToElement(document.querySelector('[data-section="multi"]'));
            break;
          case 'individual':
            this._scrollToElement(document.querySelector('[data-section="individual"]'));
            break;
          case 'fast':
            this._scrollToElement(document.querySelector('[data-section="fast"]'));
            break;
          case 'comfort':
            this._scrollToElement(document.querySelector('[data-section="comfort"]'));
            break;
        }
      });
    });
  }

  _scrollToElement(element) {
    try {
      element.scrollIntoView({block: "center", behavior: "smooth"});
    } catch (err) { console.warn(err); }
  }

  _triggers() {
    if (this.btnBurger) {
      this.btnBurger.addEventListener('click', (e) => {
        e.preventDefault();
        if (this.btnBurger.classList.contains('open')) {
          document.body.style.overflowY = 'hidden';

          if (this.header && this.navSmall) {
            this.header.forEach(el => el.setAttribute('src', 'icons/logo-white.svg'));
            this.navSmall.style.cssText = `left: 0%`;
          }

          if (this.arrowAnimate)  { this.arrowAnimate.style.animation = `none`; };

          this.btnBurger.classList.add('close');
          this.btnBurger.classList.remove('open');
        } else {
          document.body.style.overflowY= '';

          if (this.header && this.navSmall) {
            this.header.forEach(el => el.setAttribute('src', 'icons/logo.svg'));
            this.navSmall.style.cssText = `left: 100%`;
          }

          setTimeout(() => { if (this.arrowAnimate && window.scrollY < 350) {this.arrowAnimate.style.animation = `bounce 2s infinite ease-in`; } }, 400);

          this.btnBurger.classList.remove('close');
          this.btnBurger.classList.add('open');
        }
      });
    }

    this._navigationEvents();
  }
}

export default BurgerMenu;
