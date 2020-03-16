const popups = document.querySelectorAll('.popup');

/* const close = (target) => {
  const popup = target.closest('.popup');
  popup.classList.remove('modal_open');
  document.body.style.overflowY = 'auto';
}; */

export const open = (modal) => {
  modal.classList.add('modal_open');
  document.body.style.overflowY = 'hidden';
};

/* const handler = (event) => {
  const target = event.target;
  
  if (!target.matches('.close, .popup')) return;

  close(target);
};*/

const openHandler = () => {
  for (const popup of popups) {
    popup.addEventListener('click', handler);
  }
}; 

export default openHandler;