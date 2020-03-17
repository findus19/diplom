import {openPopup} from '../openPopups';
import {SliderCarousel, sliderCounter} from '../carousel';
const popupRepairTypes = () => {
    const popupRepair = document.querySelector('.popup-repair-types'),
        typesSlider = document.querySelector('.repair-types-slider'),
        linkList = document.querySelector('.link-list-menu .menu-link'),
        typesTab = document.querySelector('.repair-types .repair-types-tab');
    
    const tabSlider = () => {
        const chikd = typesSlider.children[0];
        const sliderRepair = new SliderCarousel({
            main: `.repair-types-slider`,
            wrap: `.${chikd.className}`,
            tabs: '.nav-list-repair',
            classTab: 'repair-types-nav__item',
            moveSlide: 'y',
            numSlider: sliderCounter.count,
            slidesShow: 1,
        });
        sliderRepair.init(); 
    }
        
    const tabDoIt = (event) => {
        const target = event.target;
        if(!target.matches('.link-list-repair a')) return;

        openPopup(popupRepair);
    }

    linkList.addEventListener('click', openPopup.bind(null, popupRepair));
    typesTab.addEventListener('click', tabDoIt);
    tabSlider();
};

export default popupRepairTypes;