//import { open } from "../openHandler";
import { SliderCarousel, sliderCounter } from "../carousel";

const transparencyPopup = document.querySelector('.popup-transparency'),
  slider = document.querySelector('.transparency-slider'),
  total = transparencyPopup.querySelector('.slider-counter-content__total'),
  topical = transparencyPopup.querySelector('.slider-counter-content__current');

let doc,
  docMobile;

const popupOpenTransparency = () => {
    const target = event.target;

    if (!target.matches('.transparency-item__img')) return;
  
    const item = target.parentNode;
    const children = [...slider.children]
  
    doc.toSlide(children.indexOf(item));
    topical.innerText = doc.options.position + 1;

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if(target.closest('.transparency-item__img')){
            transparencyPopup.style.visibility = 'visible';
        } else{
            target = target.closest('.popup-dialog-transparency');
            if(!target){
                transparencyPopup.style.visibility = 'hidden';
                document.body.style.overflow = 'visible';
            }
        }
    });
};


const popupTransparency = () => {
  slider.addEventListener('click', popupOpenTransparency);
  
  doc = new SliderCarousel({
    wrap: '.popup-transparency-slider',
    main: '.popup-transparency-slider-wrap',
    
    prev: '#transparency_left',
    next: '#transparency_right',
    
    numberSlider: sliderCounter.count,
    slidesToShow: 1,
  });
  
  doc.init();

  docMobile = new SliderCarousel({
    wrap: '.transparency-slider',
    main: '.transparency-slider-wrap',
    
    prev: '#transparency-arrow_left',
    next: '#transparency-arrow_right',
    
    numberSlider: sliderCounter.count,
    slidesToShow: 1,
  });
  
  docMobile.init();
  
  const responseHandler = () => {
    if (document.documentElement.clientWidth < 1091) {
      if (!docMobile.style) {
        docMobile.addStyle();
      }
    } else if (document.documentElement.clientWidth > 1090) {
      if (docMobile.style) {
        docMobile.removeStyle();
      }
    }
  };

  responseHandler();

  total.innerText = doc.slides.length;
  
  doc.main.addEventListener('sliderChange', () => {
    topical.innerText = doc.options.position + 1;
  });

  window.addEventListener('resize', responseHandler);
};

export default popupTransparency;