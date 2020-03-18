import  {SliderCarousel, sliderCounter } from './carousel';

const scheme = () => {
  const slider = new SliderCarousel({
    main: `.scheme-slider-wrap`,
    wrap: `.scheme-slider`,
  
    tabs: '#scheme-list',
    classTab: 'scheme-nav__item',
  
    numSlider: sliderCounter.count,
    slidesShow: 1,
  });

  slider.init();

  const sliderNav = new SliderCarousel({
    main: `.nav-list`,
    wrap: `.scheme-nav__item`,

    prev: '#nav-arrow-scheme_left',
    next: '#nav-arrow-scheme_right',
  
    numSlider: sliderCounter.count,
    slidesShow: 2,
    
    responsive: [
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
  
  sliderNav.init();
  const responseHandler = () => {
    if (document.documentElement.clientWidth < 1025) {
      if (!sliderNav.style) {
        sliderNav.addStyle();
      }
    } else if (document.documentElement.clientWidth > 1024) {
      if (sliderNav.style) {
        sliderNav.removeStyle();
      }
    }
  };

  responseHandler();
  
  window.addEventListener('resize', responseHandler);
  
  slider.main.addEventListener('tabChange', () => {
    const children = slider.main.querySelectorAll('.scheme-description-block');
    const active = slider.main.querySelector('.scheme-description-block.visible-content-block');
    
    active.classList.remove('visible-content-block');
    const needTab = children.item(slider.options.position);
    needTab.classList.add('visible-content-block');
  });
};

export default scheme;