import {openPopup} from '../openPopups.js';
import {SliderCarousel, sliderCounter} from '../carousel';

const portfolio = () => {
    const popupPortfolio = document.querySelector('.popup-portfolio'),
        portfolioDivSlider = document.querySelector('.portfolio-slider'),
        contentCurrent = document.querySelector('#portfolio-counter .slider-counter-content__current'),
        contentTotal = document.querySelector('#portfolio-counter .slider-counter-content__total'),
        portfolioText = document.querySelectorAll('.popup-portfolio .popup-portfolio-text');

    let portfolioSlider,
        popupSlider, 
        portfolioSliderMobile

    const openPopupPortfolio = (event) => {
        let {target} = event,
            frameItem = target.parentNode, //рамка с двумя item
            frameChild = [...frameItem.children], //дети item
            selfSlide = frameItem.parentNode, //сам слайд
            slideChild = [...selfSlide.children], //дети(рамки) слайда
            contentCurrent = document.querySelector('#popup-portfolio-counter .slider-counter-content__current');

        if (!target.matches('.portfolio-slider__slide-frame, .item-hover')) return;
        
        if (target.matches('.portfolio-slider__slide-frame'))  {
            let index = (slideChild.indexOf(frameItem) * 2) + frameChild.indexOf(target);
        
            contentCurrent.innerText = index + 1;
            popupSlider.toSlide(index);
        }
        
        if (target.matches('.item-hover'))  {
            frameChild = [...frameItem.parentNode.children];
            let index = frameChild.indexOf(frameItem);
        
            contentCurrent.innerText = index + 1;
            popupSlider.toSlide(index);
        }

        const activate = document.querySelector('.popup-portfolio-text.active');
        activate.classList.remove('active');
        portfolioText[popupSlider.options.position].classList.add('active');

        openPopup(popupPortfolio);
    };

  popupSlider = new SliderCarousel({
    wrap: '.popup-portfolio-slider',
    main: '.popup-portfolio-slider-wrap',
    
    prev: '#popup_portfolio_left',
    next: '#popup_portfolio_right',
    
    numSlider: sliderCounter.count,
    slidesShow: 1,
  });
  
  popupSlider.init();
  
  portfolioSlider = new SliderCarousel({
    wrap: '.portfolio-slider',
    main: '.portfolio-slider-wrap',
    
    prev: '#portfolio-arrow_left',
    next: '#portfolio-arrow_right',

    hideArrow: true,
    
    numSlider: sliderCounter.count,
    slidesShow: 3,

    responsive: [
      {
        breakpoint: 1030,
        slideToShow: 3
      },
      {
        breakpoint: 1024,
        slideToShow: 2
      },
      {
        breakpoint: 901,
        slideToShow: 1
      }
    ]
  });

  portfolioSlider.init();

  portfolioSliderMobile = new SliderCarousel({
    wrap: '.portfolio-slider-mobile',
    main: '.portfolio-slider-wrap',
    
    prev: '#portfolio-arrow-mobile_left',
    next: '#portfolio-arrow-mobile_right',

    numSlider: sliderCounter.count,
    slidesShow: 1,
  });

  portfolioSliderMobile.init();

  const totalModal = document.querySelector('#popup-portfolio-counter .slider-counter-content__total');
  totalModal.innerText = popupSlider.slides.length;
  contentTotal.innerText = portfolioSliderMobile.slides.length;
  portfolioText[0].classList.add('active'); 
  
  portfolioSliderMobile.main.addEventListener('click', openPopupPortfolio);
  portfolioDivSlider.addEventListener('click', openPopupPortfolio);

  portfolioSliderMobile.main.addEventListener('sliderChange', () => {
    contentCurrent.innerText = portfolioSliderMobile.options.position + portfolioSliderMobile.slidesShow;
  });

  popupSlider.main.addEventListener('sliderChange', () => {
    let contentCurrent = document.querySelector('#popup-portfolio-counter .slider-counter-content__current');
    contentCurrent.innerText = popupSlider.options.position + popupSlider.slidesShow;
    const activate = document.querySelector('.popup-portfolio-text.active');
    activate.classList.remove('active');
    portfolioText[popupSlider.options.position].classList.add('active');
    portfolioSliderMobile.toSlide(popupSlider.options.position);
    contentCurrent = document.querySelector('#portfolio-counter .slider-counter-content__current');
    contentCurrent.innerText = popupSlider.options.position + popupSlider.slidesShow;
  });
};

export default portfolio;