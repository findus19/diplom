'use strict';
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'new-event-polyfill';
import 'remove-polyfill';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import 'classlist-polyfill';


import openPhone from './modules/openPhone';
import openModal from './modules/openPopups';
import postForms from './modules/forms';
import popupDialogMenu from './modules/popups/popupDialogMenu';
import scroll from './modules/scroll';
import maskPhone from './modules/maskPhone';
import popupRepairTypes from './modules/popups/popupRepairTypes';
import popupPrivacy from './modules/popups/popupPrivacy';
import tooltipsFormula from './modules/formula';
import formulaSlider from './modules/formulaSlider';
import partners from './modules/partnersCarousel';
import reviews from './modules/reviewsCarousel';
import popupConsultation from './modules/popups/popupConsultation';
import scheme from './modules/schemesCarousel';
import tooltipsProblems from './modules/problems';
import problemsSlider from './modules/problemsSlider';
import accordion from './modules/accordion';
import popupTransparency from './modules/popups/popupTransparency';
import services from './modules/popups/popupServices';
import portfolio from './modules/popups/popupPortfolio';
import design from './modules/designCarousel';
import popupDesign from './modules/popups/popupDesign'

openPhone();

openModal();

postForms();

popupDialogMenu();

scroll();

maskPhone();

popupRepairTypes();

popupPrivacy();

tooltipsFormula();

formulaSlider();

partners();

reviews();

popupConsultation();

scheme();

tooltipsProblems();

problemsSlider();

accordion();

popupTransparency();

services();

portfolio();

design();

popupDesign();



