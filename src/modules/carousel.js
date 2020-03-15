export default class SliderCarousel {
    constructor({
      main,
      wrap,
      next,
      prev,
      infinity = false,
      position = 0,
      slidesToShow = 3,
      responsive = [],
      numberSlider = 1
    }) {
      if (!main && !wrap) {
        console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"!')
      }
  
      this.main = document.querySelector(main);
      this.wrap = document.querySelector(wrap);
      this.slides = document.querySelector(wrap).children;
      this.next = document.querySelector(next);
      this.prev = document.querySelector(prev);
      this.slidesToShow = slidesToShow;
      this.options = {
        position,
        infinity,
        widthSlide: Math.floor(100 / this.slidesToShow),
        maxPosition: this.slides.length - this.slidesToShow
      };
      this.responsive = responsive;
      this.numberSlider = numberSlider;
  
      this.event = new Event("sliderChange");
    }
  
    init() {
      this.addGloClass();
      this.addStyle();
  
      if (!this.prev && !this.next) {
        this.addArrow();
      }
  
      this.controlSlider();
      this.responsiveInit();
    }
  
    addGloClass() {
      this.main.classList.add(`glo-slider${this.numberSlider}`);
      this.wrap.classList.add('glo-slider__wrap');
  
      for (const item of this.slides) {
        item.classList.add('glo-slider__item');
      }
    }
  
    addStyle() {
      let style = document.getElementById(`sliderCarousel-style${this.numberSlider}`);
  
      if (!style) {
        style = document.createElement('style');
        style.id = `sliderCarousel-style${this.numberSlider}`;
      }
  
      style.textContent = `
        .glo-slider${this.numberSlider} {
          overflow: hidden;
        }
        .glo-slider${this.numberSlider} .glo-slider__wrap {
          display: flex;
          transition: transform .5s;
          will-change: transform;
        }
        .glo-slider${this.numberSlider} .glo-slider__item {
          max-width: none;
          flex: 0 0 ${this.options.widthSlide}%;
          align-items: center;
          justify-content: center;
          margin: auto 0;
        }
      `;
  
      document.head.appendChild(style);
    }
  
    controlSlider() {
      this.prev.addEventListener('click', this.prevSlider.bind(this));
      this.next.addEventListener('click', this.nextSlider.bind(this));
    }
  
    prevSlider() {
      if (this.options.infinity || this.options.position > 0) {
        --this.options.position;
  
        if (this.options.position < 0) {
          this.options.position = this.options.maxPosition;
        }
  
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      }
  
      this.main.dispatchEvent(this.event);
    }
  
    nextSlider() {
      if (this.options.infinity || this.options.position < this.options.maxPosition) {
        ++this.options.position;
  
        if (this.options.position > this.options.maxPosition) {
          this.options.position = 0;
        }
  
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      }
  
      this.main.dispatchEvent(this.event);
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
  
    responsiveInit() {
      const slidesToShowDefault = this.slidesToShow,
        allResponse = this.responsive.map(item => item.breakpoint),
        maxResponse = Math.max(...allResponse);
  
      const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;
  
        if (widthWindow < maxResponse) {
          for (let i = 0; i < allResponse.length; i++) {
            if (widthWindow < allResponse[i]) {
              this.slidesToShow = this.responsive[i].slideToShow;
              this.options.widthSlide = Math.floor(100 / this.slidesToShow);
              this.addStyle();
            }
          }
        } else {
          this.slidesToShow = slidesToShowDefault;
          this.options.widthSlide = Math.floor(100 / this.slidesToShow);
          this.addStyle();
        }
      }
  
      checkResponse();
  
      window.addEventListener('resize', checkResponse);
    }
  }
  
  export let sliderCounter = {
    num: 0,
    get count() {
      this.num++;
  
      return this.num;
    }
  };