import  {SliderCarousel, sliderCounter } from "./carousel";

const scheme = () => {
  const slider = new SliderCarousel({
    main: `.scheme-slider-wrap`,
    wrap: `.scheme-slider`,
  
    tabs: '#scheme-list',
    classTab: 'scheme-nav__item',

    prev: '#nav-arrow-scheme_left',
    next: '#nav-arrow-scheme_right',
  
    numberSlider: sliderCounter.count,
    slidesToShow: 1,
  });
  
  slider.init();
  
  slider.main.addEventListener('tabChange', () => {
    const children = slider.main.querySelectorAll('.scheme-description-block');
    const active = slider.main.querySelector('.scheme-description-block.visible-content-block');
    
    active.classList.remove('visible-content-block');
    const needTab = children.item(slider.options.position);
    needTab.classList.add('visible-content-block');
  });
};

export default scheme;