const dialogMenu = () => {
    const menu = document.querySelector('.popup-dialog-menu');
    let menuOpen = true;

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        let menuBtn = target.closest('.menu');
        if (menuBtn && menuOpen) {
            menuOpen = false;
            menu.classList.add('showHide-menu');
        } else if (target !== menu && !menuOpen) {
            menuOpen = true;
            menu.classList.remove('showHide-menu');
        }
    });
};

export default dialogMenu;
