import {
  initSlider
} from './utils.js';

import {
  sliderConfig
} from './configs.js';

const initSliders = () => {
  initSlider( '.main-first', sliderConfig );
  document.querySelectorAll( '.product-slider .swiper' ).forEach( slider => {
    initSlider( slider, sliderConfig.product );
  } );
  initSlider( '.reviews-slider', sliderConfig.reviews );
};


export {
  initSliders,
};
