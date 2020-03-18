const sliderWrap = document.querySelector('.formula-slider-wrap'),
  slider = document.querySelector('.formula-slider'),
  formulaSlide = document.getElementsByClassName('formula-slider__slide'),
  selectorPrev = 'formula-prev-slide',
  selectorActive = 'formula-slider_active',
  slidesDefault = 3;

const getSlides = () => {
  return document.documentElement.clientWidth < 768 ? 1 : slidesDefault;
}

let slidesShow = getSlides(),
  responseCurrentSlider = getSlides() === 1 ? 1 : 2;

const slideRight = () => {
  const prev = slider.appendChild(formulaSlide[0]);
  prev.classList.remove(selectorPrev);
  formulaSlide[0].classList.add(selectorPrev);

  let lastSlide = formulaSlide[0],
    currentSlide = formulaSlide[1];

  if (slidesShow === slidesDefault) {
    lastSlide = formulaSlide[1];
    currentSlide = formulaSlide[2];
  }

  lastSlide.classList.remove(selectorActive);
  currentSlide.classList.add(selectorActive);
};

const insertSlideStart = () => {
  return slider.insertBefore(formulaSlide[formulaSlide.length - 1], formulaSlide[0]);
};

const slideLeft = () => {
  formulaSlide[0].classList.remove(selectorPrev);
  
  let lastSlide = formulaSlide[1],
    currentSlide = formulaSlide[0];

  if (slidesShow === slidesDefault) {
    currentSlide = formulaSlide[1];
    lastSlide = formulaSlide[2];
  }
  
  currentSlide.classList.add(selectorActive);
  lastSlide.classList.remove(selectorActive);

  const next = insertSlideStart();
  next.classList.add(selectorPrev);
};

const responseInit = () => {
  insertSlideStart();

  if (slidesShow === slidesDefault) {
    insertSlideStart();
  }

  formulaSlide[0].classList.add(selectorPrev);

  let currentSlide = formulaSlide[1];

  for (const slide of formulaSlide) {
    if (slidesShow === 1) {
      slide.classList.add('formula-one-slide');
    }
  }

  if (slidesShow === slidesDefault) {
    currentSlide = formulaSlide[2];
  }

  currentSlide.classList.add('formula-slider_active');
};

const resizeTamer = () => {
  slidesShow = getSlides();

  for (const slide of formulaSlide) {
    if (slidesShow === slidesDefault) {
      slide.classList.remove('formula-one-slide');
    } else {
      slide.classList.add('formula-one-slide');
    }
  }
};

const sliderTamer = (event) => {
  const target = event.target;

  if (target.closest('#formula-arrow_right')) {
    slideRight();
  } else if (target.closest('#formula-arrow_left')) {
    slideLeft();
  }
};

const formulaSlider = () => {
  responseInit();

  sliderWrap.addEventListener('click', sliderTamer);
  window.addEventListener('resize', resizeTamer);
};

export default formulaSlider;