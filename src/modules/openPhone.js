'use strict';

const openPhone = () => {
    const arrow = document.querySelector('.header-contacts__arrow'),
        accord = document.querySelector('.header-contacts__phone-number-accord'),
        twoNumber = document.querySelectorAll('.header-contacts__phone-number')[1];
    console.log(arrow);
    console.log(accord);
    
    arrow.addEventListener('click', ()=> {
        twoNumber.style.opacity = 1;
        console.log(123)
        console.log(twoNumber);
        
    })
    
}


export default openPhone;