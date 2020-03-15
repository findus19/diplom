
export const openPopupThank = () => {
    const popupThank = document.querySelector('.popup-tnank');
    document.body.addEventListener('click', (event) => {
        const target = event.target;
        popupThank.style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
        target = target.matches('.close');
        if(target){
            popupThank.style.visibility = 'hidden';
            document.body.style.overflow = 'visible';
        }
    })
};


export default openPopupThank;