const popupConsultation = () => {
    const popupCons = document.querySelector('.popup-consultation');

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if(target.closest('.button_wide')){
            popupCons.style.visibility = 'visible';
            document.body.style.overflow = 'hidden';
        } else{
            target = target.matches('.close');
            if(target){
                popupCons.style.visibility = 'hidden';
                document.body.style.overflow = 'visible';
            }
        }
    });
};

export default popupConsultation;