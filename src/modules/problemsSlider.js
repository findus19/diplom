const sliderWrap = document.querySelector('.problems-slider-wrap'),
  slider = document.querySelector('.problems-slider'),
  problemsSlide = document.getElementsByClassName('problems-slider__slide'),
  selectorPrev = 'problems-prev-slide',
  selectorActive = 'problems-slider_active',
  slidesDefault = 3;

const getSlides = () => {
  return document.documentElement.clientWidth < 768 ? 1 : slidesDefault;
}

let slidesShow = getSlides(),
  responseCurrentSlider = getSlides() === 1 ? 1 : 2;

const slideRight = () => {
  const prev = slider.appendChild(problemsSlide[0]);
  prev.classList.remove(selectorPrev);
  problemsSlide[0].classList.add(selectorPrev);

  let lastSlide = problemsSlide[0],
    currentSlide = problemsSlide[1];

  if (slidesShow === slidesDefault) {
    lastSlide = problemsSlide[1];
    currentSlide = problemsSlide[2];
  }

  lastSlide.classList.remove(selectorActive);
  currentSlide.classList.add(selectorActive);
};

const insertSlideStart = () => {
  return slider.insertBefore(problemsSlide[problemsSlide.length - 1], problemsSlide[0]);
};

const slideLeft = () => {
  problemsSlide[0].classList.remove(selectorPrev);
  
  let lastSlide = problemsSlide[1],
    currentSlide = problemsSlide[0];

  if (slidesShow === slidesDefault) {
    currentSlide = problemsSlide[1];
    lastSlide = problemsSlide[2];
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

  problemsSlide[0].classList.add(selectorPrev);

  let currentSlide = problemsSlide[1];

  for (const slide of problemsSlide) {
    if (slidesShow === 1) {
      slide.classList.add('problems-one-slide');
    }
  }

  if (slidesShow === slidesDefault) {
    currentSlide = problemsSlide[2];
  }

  currentSlide.classList.add('problems-slider_active');
};

const resizeTamer = () => {
  slidesShow = getSlides();

  for (const slide of problemsSlide) {
    if (slidesShow === slidesDefault) {
      slide.classList.remove('problems-one-slide');
    } else {
      slide.classList.add('problems-one-slide');
    }
  }
};

const sliderTamer = (event) => {
  const target = event.target;

  if (target.closest('#problems-arrow_right')) {
    slideRight();
  } else if (target.closest('#problems-arrow_left')) {
    slideLeft();
  }
};

const problemsSlider = () => {
  responseInit();

  sliderWrap.addEventListener('click', sliderTamer);
  window.addEventListener('resize', resizeTamer);
};

export default problemsSlider;