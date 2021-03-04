class BurgerMenu {
  constructor(btnId) {
    this.btnBurger = document.getElementById(btnId);
    this.header = document.querySelector('.header__logo');
    this.navSmall = document.querySelector('.nav-small');
    this.arrowAnimate = document.querySelector('.productive__arrow-down');

    this._triggers();
    this._removeAnimation(); // fix z-index (keyframe)
  }

  _triggers() {
    if (this.btnBurger) {
      this.btnBurger.addEventListener('click', (e) => {
        e.preventDefault();
        if (this.btnBurger.classList.contains('open')) {
          document.body.style.overflow = 'hidden';

          if (this.header && this.navSmall) {
            this.header.setAttribute('src', 'icons/logo-white.svg');
            this.navSmall.style.cssText = `left: 0%`;
          }

          if (this.arrowAnimate)  { this.arrowAnimate.style.animation = `none`; };

          this.btnBurger.classList.add('close');
          this.btnBurger.classList.remove('open');
        } else {
          document.body.style.overflow = '';

          if (this.header && this.navSmall) {
            this.header.setAttribute('src', 'icons/logo.svg');
            this.navSmall.style.cssText = `left: 100%`;
          }

          setTimeout(() => { if (this.arrowAnimate && window.scrollY < 350) {this.arrowAnimate.style.animation = `bounce 2s infinite ease-in`; } }, 400);

          this.btnBurger.classList.remove('close');
          this.btnBurger.classList.add('open');
        }
      });
    }
  }

  _removeAnimation() {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 350) {
        if (this.arrowAnimate) { this.arrowAnimate.style.animation = `none`; }
      } else { if (this.arrowAnimate) { this.arrowAnimate.style.animation = `bounce 2s infinite ease-in`; } }
    });
  }
}

export default BurgerMenu;
