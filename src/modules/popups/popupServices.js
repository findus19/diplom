import { SliderCarousel, sliderCounter } from '../carousel';

const repairDate = document.querySelector('.popup-repair-types-content__head-date'),
  listPopupRepair = document.querySelector('.nav-list-popup-repair'),
  switchInner = document.getElementById('switch-inner'),
  repairContentTable = document.querySelector('.popup-repair-types-content-table');

const setDate = (date) => {
  repairDate.innerText = date;
};

const getTabs = (data) => {
  const tabs = [];
  data.forEach(tab => {
    tabs.push(tab.title);
  });

  return tabs;
};

const setTabs = (tabs) => {
  listPopupRepair.innerHTML = '';
  for (const tab of tabs) {
    listPopupRepair.insertAdjacentHTML('beforeend', `
      <button class="button_o popup-repair-types-nav__item">${tab}</button>
    `);
  }
};

const getPriceList = (data) => {
  let costs = '';
  
  for (const cost of data.priceList) {
    costs += `
      <tr class="mobile-row showHide">
        <td class="repair-types-name">${cost.typeService}</td>
        <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
        <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
        <td class="repair-types-value">${cost.units}</td>
        <td class="repair-types-value">${cost.cost} руб.</td>
      </tr>
    `;
  }

  return costs;
};

const setPriceList = (data) => {
  repairContentTable.innerHTML = '';

  for (const item of data) {
    repairContentTable.insertAdjacentHTML('beforeend', `
      <table class="popup-repair-types-content-table__list">
        ${getPriceList(item)}
      </table>
    `);
  }
};

const priceDoIt = (data) => {
  const date = data.shift().date;
  
  setDate(date);
  setTabs(getTabs(data));
  setPriceList(data);

  const slider = new SliderCarousel({
    main: `.popup-repair-types-content-table-wrap`,
    wrap: `.popup-repair-types-content-table`,
  
    tabs: '.nav-list-popup-repair',
    classTab: 'popup-repair-types-nav__item',
  
    numSlider: sliderCounter.count,
    slidesShow: 1,
  });
  
  slider.init();
};

const tabDoIt = () => {
  const target = event.target;
  if (!target.matches('button')) return;
  switchInner.innerText = target.innerText;
}

const services = () => {
  fetch('./db/db.json')
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(priceDoIt);
    
  listPopupRepair.addEventListener('click', tabDoIt);
};

export default services;