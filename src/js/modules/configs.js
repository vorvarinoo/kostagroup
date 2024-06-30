const sliderConfig = {
  default: {
    slidesPerView: 1,

    watchSlidesProgress: true,
  },

  product: {
    initialSlide: 1,
    slidesPerView: 'auto',
    slidesOffsetBefore: 100,
    loop: true,
  },

  reviews: {
    slidesPerView: 1,
    navigation: {
      nextEl: '.slider-btn-next',
      prevEl: '.slider-btn-prev',
    },
  }
};

const smoothScrollConfig = {
  speed: 900,
  speedAsDuration: true,
  updateURL: false,
};

const modalConfig = {
  linkAttributeName: false,
  catchFocus: true,
  closeOnEsc: true,
  backscroll: true,
};

const validateConfig = {
  justValidate: {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      position: 'absolute',
      bottom: '-20px',
      left: '0',
      color: 'var(--red-70)',
      fontSize: '12px',
      textAlign: 'left',
      borderBottom: 'var(--red-70)',
    },
    errorFormClass: 'shaked',
    errorTimeout: 1500,
  },
  errorTimeout: 1500,
  mask: {
    bodyMask: ' (___) ___ __ __',
  }
};

const observerConfig = {
  header: {
    rootMargin: '0px',
    threshold: 0
  },
  scrollTop: {
    rootMargin: '600px',
    threshold: 1,
  },
};

const requestsConfig = {
  handlerURL: 'https://jsonplaceholder.typicode.com/posts',
};

export {
  sliderConfig,
  smoothScrollConfig,
  modalConfig,
  validateConfig,
  observerConfig,
  requestsConfig,
};
