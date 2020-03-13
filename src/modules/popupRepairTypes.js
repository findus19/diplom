const popupRepairTypes = () => {
    const popupRepair = document.querySelector('.popup-repair-types');

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if(target.closest('.link-list')){
            popupRepair.style.visibility = 'visible';
            document.body.style.overflow = 'hidden';
        } else{
            target = target.closest('.popup-dialog-repair-types');
            if(!target){
                popupRepair.style.visibility = 'hidden';
                document.body.style.overflow = 'visible';
            }
        }
    });
};

export default popupRepairTypes;