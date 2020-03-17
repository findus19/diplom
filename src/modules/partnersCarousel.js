import {SliderCarousel, sliderCounter} from './carousel';

const partners = () => {
    const carousel = new SliderCarousel({
    wrap: '.partners-slider',
    main: '#partners .wrapper',

    prev: '#partners-arrow_left',
    next: '#partners-arrow_right',

    numSlider: sliderCounter.count,
    slidesShow: 3,

    responsive: [{
        breakpoint: 1024,
        slideToShow: 3
      },
      {
        breakpoint: 768,
        slideToShow: 2
      },
      {
        breakpoint: 576,
        slideToShow: 1
      }
    ]
  });

  carousel.init();
};

export default partners;