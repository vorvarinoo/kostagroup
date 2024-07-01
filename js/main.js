import {
  iosVhFix,
} from './modules/utils.js';

import {
  initHeaderMenu
} from './modules/header.js';

import {
  validateForms,
} from './modules/validate.js';

import {
  initModals,
} from './modules/modal.js';

import {
  initSliders,
} from './modules/slider.js';

import {
  initScrollTop,
} from './modules/scroll-top.js';

import {
  products,
} from './modules/product.js';

document.addEventListener( 'DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener( 'load', () => {
    validateForms();
    initModals();
    initSliders();
    initScrollTop();
    initHeaderMenu();
    products();
  } );
} );
