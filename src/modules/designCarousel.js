import {SliderCarousel, sliderCounter} from './carousel';
const design = () => {
    const designsSlider = document.querySelector('.designs-slider'),
        designsList = document.getElementById('designs-list'),
        contentCurrent = document.querySelector('#designs-counter .slider-counter-content__current'),
        contentTotal = document.querySelector('#designs-counter .slider-counter-content__total'),
        pagination = document.querySelectorAll('.preview-block'),
        designsId = document.getElementById('designs');

    let windowSlider = [],
        tabsSlider,
        mediaSlider;

    const tabOpen = (event) => {
        const {target} = event;
        if (!target.matches('.designs-nav__item')) return;

        const children = [...tabsSlider.tabs.children],
            slider = windowSlider[children.indexOf(target)],
            designListChildren = [...designsList.children],
            paginationActivate = document.querySelector('.preview-block.visible'),
            paginationNeed = designListChildren.indexOf(target);
        
        for (const slider of windowSlider) {
            slider.removeCheckSlider();
        }

        slider.checkSlider();
        paginationActivate.classList.remove('visible');
        pagination[paginationNeed].classList.add('visible');
      
        const previewBlockActivate = pagination[paginationNeed].querySelector('.preview_active');
        previewBlockActivate.classList.remove('preview_active');
      
        const previewBlock = pagination[paginationNeed].children[slider.options.position];
        previewBlock.querySelector('.preview-block__item-inner').classList.add('preview_active');

        contentCurrent.innerText = slider.options.position + 1;
        contentTotal.innerText = slider.slides.length;
    };
    
    const children = designsSlider.children;
  
    for (const child of children) {
    const slider = new SliderCarousel({
        main: `.repair-types-slider`,
        wrap: `.${child.className}`,
        
        prev: '#design_left',
        next: '#design_right',
        
        numSlider: sliderCounter.count,
        slidesShow: 1,
    });
    
    slider.init();
    slider.removeCheckSlider();
    
    windowSlider.push(slider);

    slider.wrap.addEventListener('sliderChange', () => {
      contentCurrent.innerText = slider.options.position + 1;
    });
  }
  
    windowSlider[0].checkSlider();

    tabsSlider = new SliderCarousel({
        main: `.designs-slider-wrap`,
        wrap: `.designs-slider`,
    
        tabs: '#designs-list',
        classTab: 'designs-nav__item',
        moveSlide: 'y',
    
        numSlider: sliderCounter.count,
        slidesShow: 1,
    });

    tabsSlider.init();
    
    designsList.addEventListener('click', tabOpen);

    mediaSlider = new SliderCarousel({
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
    
    mediaSlider.init();

    const tabDoIt = () => {
        if (document.documentElement.clientWidth < 1025) {
            if (!mediaSlider.style) {
                mediaSlider.addStyle();
            }
        } else if (document.documentElement.clientWidth > 1024) {
            if (mediaSlider.style) {
                mediaSlider.removeStyle();
            }
        } else if (document.documentElement.clientWidth > 1024 && mediaSlider.style) {
            mediaSlider.removeStyle();
            tab.children[0].style.marginLeft = 0;
        };
    }

    tabDoIt();

    tabsSlider.wrap.addEventListener('responseEventAfter', tabDoIt);

    const paginationOpen = () => {
        let {target} = event;

        target = target.closest('.preview-block__item');

        if (!target) return;

        const paginationTarget = target.parentNode,
        paginationIndex = [...pagination].indexOf(paginationTarget),
        slider = windowSlider[paginationIndex],
        paginationChldren = [...paginationTarget.children],
        dotIndex = paginationChldren.indexOf(target);

        slider.toSlide(dotIndex);

        const previewBlockActivate = paginationTarget.querySelector('.preview_active');
        previewBlockActivate.classList.remove('preview_active');

        const previewBlockItem = target.querySelector('.preview-block__item-inner');
        previewBlockItem.classList.add('preview_active');
    };
    
    designsId.addEventListener('click', paginationOpen);
};

export default design;