import {openPopup} from '../openPopups';

const popupPrivacy = () => {
    const popupPrivacy = document.querySelector('.popup-privacy'),
        link = document.querySelectorAll('.link-privacy');

    link.forEach(item => {
        item.addEventListener('click', openPopup.bind(null, popupPrivacy))
    })
};

export default popupPrivacy;