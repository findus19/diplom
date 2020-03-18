import {SliderCarousel, sliderCounter} from './carousel';

const design = () => {
    const slider = new SliderCarousel({
        main: `.designs-slider-wrap`,
        wrap: `.designs-slider`,
        
        tabs: '#designs-list',
        classTab: 'designs-nav__item',
    
        numSlider: sliderCounter.count,
        slidesShow: 1,
        });
        
    slider.init();
    
    slider.main.addEventListener('tabChange', () => {
        const children = slider.main.querySelectorAll('.designs-slider__style');
        const active = slider.main.querySelector('.designs-slider__style.visible-content-block');
        
        active.classList.remove('visible-content-block');
        const needed = children.item(slider.options.position);
        needed.classList.add('visible-content-block');
    });
}

export default design;