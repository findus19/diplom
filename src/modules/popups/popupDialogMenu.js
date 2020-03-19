const popupDialogMenu = () => {
    const menu = document.querySelector('.popup-dialog-menu');
    let menuOpen  = true;

    document.addEventListener('click', (e) => {  
        const target = e.target;
        if(target.closest('.menu__icon')){
            menu.classList.add('showHide-menu');
            menuOpen  = false;
        } else if(!target.closest('.popup-dialog-menu') && !menuOpen ){
            menu.classList.remove('showHide-menu');
            menuOpen  = true;
        } else if (target.closest('.popup-menu-nav__item') || target.closest('.close-menu')){
            menu.classList.remove('showHide-menu');
            menuOpen  = true;
        }
    });
}


export default popupDialogMenu;
