import {openThanksPopup} from './modals/popupThank';
const forms = document.querySelectorAll('.feedback__form, .feedback-block__form');

const postData = (body) => {
    return fetch('./server.php', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
}; 

const sendForm = (event) =>{
    event.preventDefault();
    const target = event.target;
    const check = target.querySelector('.checkbox__input');
    console.log(123)

    if(!check.checked){
        alert('Согласитесь с политикой конфиденциальности');
    } else{

      const formData = new FormData(target);
      let body = {};
      formData.forEach((val, key) => {
          body[key] = val;
      });
      
      postData(body).then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        console.log(321);
        openThanksPopup();
  
      }, (error) => {
        console.log(error);
      });
  
      target.reset();
    }
};

const postForms = () => {
    forms.forEach(form => {
      const check = form.querySelector('.checkbox__input'),
        phone = form.querySelector('[name="phone"]');
  
      check.removeAttribute('required');
      phone.required = true;
  
      form.addEventListener('submit', sendForm);
    });
  };
  
  export default postForms;