const wrapper = document.querySelector('.formula-slider-wrap'),
  slider = document.querySelector('.formula-slider'),
  slides = document.getElementsByClassName('formula-slider__slide'),
  selectorPrev = 'formula-prev-slide',
  selectorActive = 'formula-slider_active';

const slidesDefault = 3;

const getSlidesToShow = () => {
  return document.documentElement.clientWidth < 768 ? 1 : slidesDefault;
}

let slidesToShow = getSlidesToShow(),
  responseCurrentSlider = getSlidesToShow() === 1 ? 1 : 2;

const slideToRight = () => {
  const prev = slider.appendChild(slides[0]);
  prev.classList.remove(selectorPrev);
  slides[0].classList.add(selectorPrev);

  let lastSlide = slides[0],
    currentSlide = slides[1];

  if (slidesToShow === slidesDefault) {
    lastSlide = slides[1];
    currentSlide = slides[2];
  }

  lastSlide.classList.remove(selectorActive);
  currentSlide.classList.add(selectorActive);
};

const insertSlideToStart = () => {
  return slider.insertBefore(slides[slides.length - 1], slides[0]);
};

const slideToLeft = () => {
  slides[0].classList.remove(selectorPrev);
  
  let lastSlide = slides[1],
    currentSlide = slides[0];

  if (slidesToShow === slidesDefault) {
    currentSlide = slides[1];
    lastSlide = slides[2];
  }
  
  currentSlide.classList.add(selectorActive);
  lastSlide.classList.remove(selectorActive);

  const next = insertSlideToStart();
  next.classList.add(selectorPrev);
};

const responseInit = () => {
  insertSlideToStart();

  if (slidesToShow === slidesDefault) {
    insertSlideToStart();
  }

  slides[0].classList.add(selectorPrev);

  let currentSlide = slides[1];

  for (const slide of slides) {
    if (slidesToShow === 1) {
      slide.classList.add('formula-one-slide');
    }
  }

  if (slidesToShow === slidesDefault) {
    currentSlide = slides[2];
  }

  currentSlide.classList.add('formula-slider_active');
};

const resizeHandler = () => {
  slidesToShow = getSlidesToShow();

  for (const slide of slides) {
    if (slidesToShow === slidesDefault) {
      slide.classList.remove('formula-one-slide');
    } else {
      slide.classList.add('formula-one-slide');
    }
  }
};

const sliderHandler = (event) => {
  const target = event.target;

  if (target.closest('#formula-arrow_right')) {
    slideToRight();
  } else if (target.closest('#formula-arrow_left')) {
    slideToLeft();
  }
};

const formulaSlider = () => {
  responseInit();

  wrapper.addEventListener('click', sliderHandler);
  window.addEventListener('resize', resizeHandler);
};

export default formulaSlider;