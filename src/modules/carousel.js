export class SliderCarousel {
  constructor({
    main,
    wrap,
    next,
    prev,
    infinity = false,
    position = 0,
    slidesShow = 3,
    responsive = [],
    numSlider = 1,
    tabs,
    classTab = 'glo__tab',
    moveSlide = 'x'
  }) {
    if (!main && !wrap) {
      console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"!')
    }

    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.first = this.slides[0];
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slidesShow = slidesShow;
    this.options = {
      position,
      infinity,
      widthSlide: Math.floor(100 / this.slidesShow),
      maxPosition: this.slides.length - this.slidesShow
    };
    this.responsive = responsive;
    this.numSlider = numSlider;

    this.event = new Event("sliderChange");
    this.tabEvent = new Event("tabChange");
    this.tabs = document.querySelector(tabs);
    this.classTab = classTab;
    this.moveSlide = moveSlide.toUpperCase();
    this.hideArrow = this.hideArrow;
    this.backcall = {},
    this.backcall.prev = {},
    this.backcall.next = {};
  }

  init() {
    this.addGloClass();
    this.addStyle();

    if (!this.prev && !this.next && !this.tabs) {
      this.addArrow();
    }

    if (this.tabs) {
      this.tabSlider();
    } else {
      this.checkSlider();
    }

    this.likeLook();
  }

  addGloClass() {
    this.wrap.classList.add(`glo-slider${this.numSlider}`);
    this.main.classList.add(`glo-wrap`);

    for (const item of this.slides) {
      item.classList.add('glo-slider__item');
    }
  }

  addStyle() {
    this.style = document.getElementById(`sliderCarousel-style${this.numSlider}`);

    if (!this.style) {
      this.style = document.createElement('style');
      this.style.id = `sliderCarousel-style${this.numSlider}`;
    }

    this.style.textContent = `
    .glo-wrap {
      overflow: hidden;
    }
    .glo-wrap .glo-slider${this.numSlider} {
      display: flex;
      ${this.moveSlide === 'Y' ? 'flex-wrap: wrap;' : 'flex-wrap: nowrap;'}
    }
    .glo-slider${this.numSlider} .glo-slider__item {
      max-width: none;
      flex: 0 0 ${this.options.widthSlide}%;
      align-items: center;
      justify-content: center;
      margin: auto 0;
      transition: margin-left .5s;
      will-change: margin-left;
    }
    `;

    document.head.appendChild(this.style);
  }

  removeStyle() {
    this.style.remove();
    this.style = null;
  }

  tabSlider() {
    const children = [...this.tabs.children];

    this.tabs.addEventListener('click', (event) => {
      const target = event.target;

      if (!target.matches(`.${this.classTab}`)) return;

      const topical = document.querySelector(`.${this.classTab}.active`);
      if (topical) {
        topical.classList.remove('active');
      }

      target.classList.add('active');

      this.toSlide(children.indexOf(target));
    });
  }

  checkSlider() {
    this.backcall.prev = this.prevSlider.bind(this);
    this.backcall.next = this.nextSlider.bind(this);
    this.prev.addEventListener('click', this.backcall.prev);
    this.next.addEventListener('click', this.backcall.next);
  }

  removeCheckSlider() {
    this.prev.removeEventListener('click', this.backcall.prev);
    this.next.removeEventListener('click', this.backcall.next);
  }  

  toSlide(position) {
    this.options.position = position;
    if (this.moveSlide === 'Y') {
      this.first.style.marginTop = `calc(${this.options.position} * -100%)`;
    } else {
      this.first.style.marginLeft = `-${this.options.position * this.options.widthSlide}%`;
    }
  
    this.main.dispatchEvent(this.tabEvent);
    this.wrap.dispatchEvent(this.tabEvent);
  }

  prevSlider() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;

      if (this.options.position < 0) {
        this.options.position = this.options.maxPosition;
      }

      if (this.moveSlide === 'Y') {
        this.first.style.marginTop = `-${this.options.position * this.options.widthSlide}%`;
      } else {
        this.first.style.marginLeft = `-${this.options.position * this.options.widthSlide}%`;
      }
    }

    if (!this.options.infinity && this.hideArrow) {
      if (this.options.position === 0 && this.options.position !== this.options.maxPosition) {
        this.prev.style.display = 'none';
      } else {
        this.prev.style.display = 'flex';
        this.next.style.display = 'flex';
      }
    }

    this.main.dispatchEvent(this.event);
    this.wrap.dispatchEvent(this.event);
  }

  nextSlider() {
    if (this.options.infinity || this.options.position < this.options.maxPosition) {
      ++this.options.position;

      if (this.options.position > this.options.maxPosition) {
        this.options.position = 0;
      }

      if (this.moveSlide === 'Y') {
        this.first.style.marginTop = `-${this.options.position * this.options.widthSlide}%`;
      } else {
        this.first.style.marginLeft = `-${this.options.position * this.options.widthSlide}%`;
      }
    }

    if (!this.options.infinity && this.hideArrow) {
      if (this.options.position !== 0 && this.options.position === this.options.maxPosition) {
        this.next.style.display = 'none';
      } else {
        this.next.style.display = 'flex';
        this.prev.style.display = 'flex';
      }
    }

    this.main.dispatchEvent(this.event);
    this.wrap.dispatchEvent(this.event);
  }

  addArrow() {
    this.prev = document.createElement('button');
    this.next = document.createElement('button');

    this.prev.className = 'glo-slider__prev';
    this.next.className = 'glo-slider__next';

    this.main.appendChild(this.prev);
    this.main.appendChild(this.next);

    const style = document.createElement('style');
    style.textContent = `
      .glo-slider__prev,
      .glo-slider__next {
        margin: 0 10px;
        border: 20px solid transparent;
        background: transparent;
      }

      .glo-slider__next {
        border-left-color: #19b5fe;
      }

      .glo-slider__prev {
        border-right-color: #19b5fe;
      }

      .glo-slider__prev:hover,
      .glo-slider__prev:focus,
      .glo-slider__next:hover,
      .glo-slider__next:focus {
        background: transparent;
        outline: transparent;
      }
    `;

    document.head.appendChild(style);
  }

  likeLook() {
    const slidesShowDefault = this.slidesShow,
      allResponse = this.responsive.map(item => item.breakpoint),
      maxResponse = Math.max(...allResponse);

    const checkResponse = () => {
      const widthWindow = document.documentElement.clientWidth;

      if (widthWindow < maxResponse) {
        for (let i = 0; i < allResponse.length; i++) {
          if (widthWindow < allResponse[i]) {
            this.slidesShow = this.responsive[i].slideToShow;
            this.options.widthSlide = Math.floor(100 / this.slidesShow);
            this.addStyle();
          }
        }
      } else {
        this.slidesShow = slidesShowDefault;
        this.options.widthSlide = Math.floor(100 / this.slidesShow);
        this.addStyle();
      }
    }

    checkResponse();
    window.addEventListener('resize', checkResponse);
  }
}

export const sliderCounter = {
  num: 0,
  get count() {
    this.num++;
    return this.num;
  }
};