const allPopups = document.querySelectorAll('.popup');

export const openPopup = (popup) => {
    popup.classList.add('open_popup');
    document.body.style.overflow = 'hidden';
}

const closePopup = (target) => {
    const popupCurrent = target.closest('.popup');
    popupCurrent.classList.remove('open_popup');
    document.body.style.overflow = 'visible';
}

const doIt = (event) => {
    const target = event.target;
    if(!target.matches('.close, .popup')) return;
    closePopup(target);
}

const openModal = () => {
    for(const popup of allPopups){
        popup.addEventListener('click', doIt);
    }
}

export default openModal;