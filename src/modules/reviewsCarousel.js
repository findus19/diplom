import {SliderCarousel, sliderCounter} from './carousel';

const reviews = () => {
    const carousel = new SliderCarousel({
        wrap: '.reviews-slider',
        main: '.reviews-slider-wrap',

        prev: '#reviews-arrow_left',
        next: '#reviews-arrow_right',

        numSlider: sliderCounter.count,
        slidesShow: 1,
    });

    carousel.init();
}

export default reviews;