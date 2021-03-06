/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/components/arrowDownEvent.js":
/*!************************************************!*\
  !*** ./source/js/components/arrowDownEvent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class ArrowDownEvent {
  constructor(arrowElemClass) {
    this.arrowAnimate = document.querySelector(`.${arrowElemClass}`);
    this.scrollToElem = document.querySelector('.bluetooth__desc');

    this._triggers();
  }

  _triggers() {
    // fix z-index bug
    window.addEventListener('scroll', e => {
      if (this.arrowAnimate && window.scrollY > 350) {
        this.arrowAnimate.style.animation = `none`;
      } else {
        this.arrowAnimate.style.animation = `bounce 2s infinite ease-in`;
      }
    });

    if (this.arrowAnimate) {
      this.arrowAnimate.addEventListener('click', e => {
        e.preventDefault();
        this.scrollToElem.scrollIntoView({
          block: "center",
          behavior: "smooth"
        });
      });
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ArrowDownEvent);

/***/ }),

/***/ "./source/js/components/burgerMenu.js":
/*!********************************************!*\
  !*** ./source/js/components/burgerMenu.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class BurgerMenu {
  constructor(btnId) {
    this.btnBurger = document.getElementById(btnId);
    this.header = document.querySelector('.header__logo');
    this.navSmall = document.querySelector('.nav-small');
    this.arrowAnimate = document.querySelector('.productive__arrow-down');

    this._triggers();
  }

  _navigationEvents() {
    if (this.navSmall) {
      this.navSmall.addEventListener('click', e => {
        if (this.btnBurger) {
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
    }
  }

  _scrollToElement(element) {
    try {
      element.scrollIntoView({
        block: "center",
        behavior: "smooth"
      });
    } catch (err) {
      console.warn(err);
    }
  }

  _triggers() {
    if (this.btnBurger) {
      this.btnBurger.addEventListener('click', e => {
        e.preventDefault();

        if (this.btnBurger.classList.contains('open')) {
          document.body.style.overflow = 'hidden';

          if (this.header && this.navSmall) {
            this.header.setAttribute('src', 'icons/logo-white.svg');
            this.navSmall.style.cssText = `left: 0%`;
          }

          if (this.arrowAnimate) {
            this.arrowAnimate.style.animation = `none`;
          }

          ;
          this.btnBurger.classList.add('close');
          this.btnBurger.classList.remove('open');
        } else {
          document.body.style.overflow = '';

          if (this.header && this.navSmall) {
            this.header.setAttribute('src', 'icons/logo.svg');
            this.navSmall.style.cssText = `left: 100%`;
          }

          setTimeout(() => {
            if (this.arrowAnimate && window.scrollY < 350) {
              this.arrowAnimate.style.animation = `bounce 2s infinite ease-in`;
            }
          }, 400);
          this.btnBurger.classList.remove('close');
          this.btnBurger.classList.add('open');
        }
      });
    }

    this._navigationEvents();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BurgerMenu);

/***/ }),

/***/ "./source/js/components/butttonScrollTop.js":
/*!**************************************************!*\
  !*** ./source/js/components/butttonScrollTop.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    window.addEventListener('scroll', e => {
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

/* harmony default export */ __webpack_exports__["default"] = (ButtonScrollTop);

/***/ }),

/***/ "./source/js/components/setFullScreen.js":
/*!***********************************************!*\
  !*** ./source/js/components/setFullScreen.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (SetFullScreenSection);

/***/ }),

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_setFullScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/setFullScreen */ "./source/js/components/setFullScreen.js");
/* harmony import */ var _components_burgerMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/burgerMenu */ "./source/js/components/burgerMenu.js");
/* harmony import */ var _components_arrowDownEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/arrowDownEvent */ "./source/js/components/arrowDownEvent.js");
/* harmony import */ var _components_butttonScrollTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/butttonScrollTop */ "./source/js/components/butttonScrollTop.js");




const fullScreenSection = new _components_setFullScreen__WEBPACK_IMPORTED_MODULE_0__["default"]('productive', 'header');
const burgerMenu = new _components_burgerMenu__WEBPACK_IMPORTED_MODULE_1__["default"]('burger-menu');
const arrowDownEvent = new _components_arrowDownEvent__WEBPACK_IMPORTED_MODULE_2__["default"]('productive__arrow-down');
const buttonScrollTop = new _components_butttonScrollTop__WEBPACK_IMPORTED_MODULE_3__["default"]('scroll-top-btn');

/***/ })

/******/ });
//# sourceMappingURL=script.js.map