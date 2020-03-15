const popupPrivacy = () => {
    const popupPrivacy = document.querySelector('.popup-privacy');

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if(target.closest('.link-privacy')){
            popupPrivacy.style.visibility = 'visible';
            document.body.style.overflow = 'hidden';
        } else{
            target = target.closest('.popup-dialog-privacy');
            if(!target){
                popupPrivacy.style.visibility = 'hidden';
                document.body.style.overflow = 'visible';
            }
        }
    });
};

export default popupPrivacy;