'use strict';

const openPhone = () => {
    const arrow = document.querySelector('.header-contacts__arrow'),
        arrowImg = document.getElementById('arrow'),
        accord = document.querySelector('.header-contacts__phone-number-accord'),
        twoNumber = document.querySelectorAll('.header-contacts__phone-number')[1];
    let flag = true;
    
    arrow.addEventListener('click', ()=> {
        if(flag) {
            flag = false;
            arrowImg.style.transform = 'rotate(-180deg)';
            accord.style.position = 'relative';
            twoNumber.style.opacity = 1;
        }else if (!flag) {
            flag = true;
            arrowImg.style.transform = 'rotate(0deg)';
            accord.style.position = 'absolute';
            twoNumber.style.opacity = 0;
        }
    }) 
}

export default openPhone;