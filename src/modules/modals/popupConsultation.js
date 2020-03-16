const popupConsultation = () => {
    const popupCons = document.querySelector('.popup-consultation');

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if(target.closest('.button_wide')){
            popupCons.classList.add('popup_open');
            document.body.style.overflow = 'hidden';
        } else{
            target = target.matches('.close');
            if(target){
                popupCons.classList.remove('popup_open');
                document.body.style.overflow = 'visible';
            }
        }
    });
};

export default popupConsultation;