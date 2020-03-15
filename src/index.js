'use strict';

import openPhone from './modules/openPhone';
import initForms from './modules/forms';
import popupDialogMenu from './modules/modals/popupDialogMenu';
import scroll from './modules/scroll';
import maskPhone from './modules/maskPhone';
import popupRepairTypes from './modules/modals/popupRepairTypes';
import popupPrivacy from './modules/modals/popupPrivacy';
import tooltips from './modules/formula';
import formulaSlider from './modules/formulaSlider';
import partners from './modules/partnersCarousel';
import reviews from './modules/reviewsCarousel';
import popupConsultation from './modules/modals/popupConsultation';
import openPopupThank from './modules/modals/popupThank';
import scheme from './modules/schemesCarousel';
import tooltipsProblems from './modules/problems';
import accordion from './modules/accordion';

openPhone();

initForms();

popupDialogMenu();

scroll();

maskPhone();

popupRepairTypes();

popupPrivacy();

tooltips();

formulaSlider();

partners();

reviews();

popupConsultation();

//openPopupThank();

scheme();

tooltipsProblems();

accordion();

