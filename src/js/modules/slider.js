import {
  initSlider
} from './utils.js';

import {
  sliderConfig
} from './configs.js';

const initSliders = () => {
  initSlider( '.main-first', sliderConfig );
  initSlider( '.product-slider .swiper', sliderConfig.product );
  initSlider( '.reviews-slider', sliderConfig.reviews );
};


export {
  initSliders,
};
