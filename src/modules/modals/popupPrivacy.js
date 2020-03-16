const popupPrivacy = () => {
    const popupPrivacy = document.querySelector('.popup-privacy');

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if(target.closest('.link-privacy')){
            popupPrivacy.classList.add('popup_open');
            document.body.style.overflow = 'hidden';
        } else{
            target = target.closest('.popup-dialog-privacy');
            if(!target){
                popupPrivacy.classList.remove('popup_open');
                document.body.style.overflow = 'visible';
            }
        }
    });
};

export default popupPrivacy;