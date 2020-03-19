import {openPopup} from '../openPopups.js';
import {SliderCarousel, sliderCounter} from '../carousel';

const popupDesign = () => {
    const popupDesignWindow = document.querySelector('.popup-design'),
  designSlider = document.querySelector('.popup-design-slider'),
  navListPopup = document.getElementById('nav-list-popup-designs'),
  contentCurrent = document.querySelector('#popup-designs-counter .slider-counter-content__current'),
  contentTotal = document.querySelector('#popup-designs-counter .slider-counter-content__total'),
  designsId = document.getElementById('designs'),
  designText = document.querySelectorAll('.popup-design-text');

let windowSlider = [],
    tabsSlider,
    mediaSlider;

const openDesign = (event) => {
  const {target} = event;

  if (!target.matches('.link-list-designs a')) return;
  
  openPopup(popupDesignWindow);
};

const getSliders = () => {
  const children = designSlider.children;
  
  for (const child of children) {
    const slider = new SliderCarousel({
      main: `.popup-design-slider`,
      wrap: `.${child.className}`,
      
      prev: '#popup_design_left',
      next: '#popup_design_right',
      
      numSlider: sliderCounter.count,
      slidesShow: 1,
    });
    
    slider.init();
    slider.removeCheckSlider();
    
    windowSlider.push(slider);

    slider.wrap.addEventListener('sliderChange', () => {
        contentCurrent.innerText = slider.options.position + 1;
    });
  };
  
  windowSlider[0].checkSlider();
  
  tabsSlider = new SliderCarousel({
    main: `.popup-design-slider-wrap`,
    wrap: `.popup-design-slider`,
    
    tabs: '#nav-list-popup-designs',
    classTab: 'designs-nav__item_popup',
    moveSlide: 'y',
    
    numSlider: sliderCounter.count,
    slidesShow: 1,
  });
  
  tabsSlider.init();

  /* mediaSlider = new SliderCarousel({
     wrap: '#designs-list',
    main: '.nav-designs',
    
    prev: '#nav-arrow-designs_left',
    next: '#nav-arrow-designs_right',
    
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
  
  mediaSlider.init(); */
};

const tabDoIt = (event) => {
  const {target} = event;

  if (!target.matches('.designs-nav__item')) return;

  const children = [...tabsSlider.tabs.children],
    slider = windowSlider[children.indexOf(target)],
    tabChildren = [...navListPopup.children];

  for (const slider of windowSlider) {
    slider.removeCheckSlider();
  }

  slider.checkSlider();

  contentCurrent.innerText = slider.options.position + 1;
  contentTotal.innerText = slider.slides.length;

  const active = document.querySelector('.popup-design-text.visible-content-block');
  active.classList.remove('visible-content-block');
  designText[tabsSlider.options.position].classList.add('visible-content-block');
};
getSliders();
  designsId.addEventListener('click', openDesign);
  navListPopup.addEventListener('click', tabDoIt);
};

export default popupDesign;