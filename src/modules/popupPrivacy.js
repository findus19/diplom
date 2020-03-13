const popupPrivacy = () => {
    const popupRepair = document.querySelector('.popup-privacy');

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if(target.closest('.link-privacy')){
            popupRepair.style.visibility = 'visible';
            document.body.style.overflow = 'hidden';
        } else{
            target = target.closest('.popup-dialog-privacy');
            if(!target){
                popupRepair.style.visibility = 'hidden';
                document.body.style.overflow = 'visible';
            }
        }
    });
};

export default popupPrivacy;