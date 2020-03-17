import {openPopup} from '../openPopups';

const popupConsultation = () => {
    const popupCons = document.querySelector('.popup-consultation'),
        wide = document.querySelectorAll('.button_wide');
   
    wide.forEach(item => {
        item.addEventListener('click', openPopup.bind(null, popupCons))
    })
};

export default popupConsultation;