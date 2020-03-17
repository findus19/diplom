import {openPopup} from '../openPopups';

const popupThank = document.querySelector('.popup-thank');

export const openThanksPopup = openPopup.bind(null, popupThank);

const thank = () => {};

export default thank;