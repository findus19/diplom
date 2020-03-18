import { openPopup } from '../openPopups';
import { SliderCarousel, sliderCounter } from '../carousel';

const popupRepair = document.querySelector('.popup-repair-types'),
  typesSlider = document.querySelector('.repair-types-slider'),
  linkList = document.querySelector('.link-list-menu .menu-link'),
  typesTab = document.querySelector('.repair-types .repair-types-tab'),
  contentCurrent = document.querySelector('#repair-counter .slider-counter-content__current'),
  contentTotal = document.querySelector('#repair-counter .slider-counter-content__total');

let windowSlider = [],
  tabsSlider,
  mediaSlider;

const allSlider = () => {
  
  const children = typesSlider.children;
  
  for (const child of children) {
    const slider = new SliderCarousel({
      main: `.repair-types-slider`,
      wrap: `.${child.className}`,
      
      prev: '#repair-types-arrow_left',
      next: '#repair-types-arrow_right',
      
      numSlider: sliderCounter.count,
      slidesShow: 1,
    });
    
    slider.init();
    slider.removeCheckSlider();

    windowSlider.push(slider);
  
    slider.wrap.addEventListener('sliderChange', () => {
      contentCurrent.innerText = slider.options.position + 1;
    });
  }

  windowSlider[0].checkSlider();
  
  tabsSlider = new SliderCarousel({
    main: `.repair-types-slider-wrap`,
    wrap: `.repair-types-slider`,
    
    tabs: '.nav-list-repair',
    classTab: 'repair-types-nav__item',
    moveSlide: 'y',
    
    numSlider: sliderCounter.count,
    slidesShow: 1,
  });
  
  tabsSlider.init();

  mediaSlider = new SliderCarousel({
    wrap: '.nav-list-repair',
    main: '.repair-types-nav',
    
    prev: '#nav-arrow-repair-left_base',
    next: '#nav-arrow-repair-right_base',
    
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
  
  mediaSlider.init();
  
  const responseHandler = () => {
    if (document.documentElement.clientWidth < 1025) {
      if (!mediaSlider.style) {
        mediaSlider.addStyle();
      }
    } else if (document.documentElement.clientWidth > 1024) {
      if (mediaSlider.style) {
        mediaSlider.removeStyle();
      }
    }
  };

  responseHandler();
  
  window.addEventListener('resize', responseHandler);
}

const tabDoIt = (event) => {
  const {target} = event;

  if (target.matches('.link-list-repair a')) {
    openPopup(popupRepair);
  };

  if (!target.matches('.repair-types-nav__item ')) return;

  for (const slider of windowSlider) {
    slider.removeCheckSlider();
  }

  const children = [...tabsSlider.tabs.children];

  const slider = windowSlider[children.indexOf(target)];
  slider.checkSlider();

  contentCurrent.innerText = slider.options.position + 1;
  contentTotal.innerText = slider.slides.length;
};

const types = () => {
  linkList.addEventListener('click', openPopup.bind(null, popupRepair));
  typesTab.addEventListener('click', tabDoIt);
  allSlider();
};

export default types;