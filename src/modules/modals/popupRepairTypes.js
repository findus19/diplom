const popupRepairTypes = () => {
    const popupRepair = document.querySelector('.popup-repair-types');

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if(target.closest('.link-list')){
            popupRepair.classList.add('popup_open');
            document.body.style.overflow = 'hidden';
        } else{
            target = target.closest('.popup-dialog-repair-types');
            if(!target){
                popupRepair.classList.remove('popup_open');
                document.body.style.overflow = 'visible';
            }
        }
    });
};

export default popupRepairTypes;