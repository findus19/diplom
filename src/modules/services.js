import { SliderCarousel, sliderCounter } from "./carousel";

const headDate = document.querySelector('.popup-repair-types-content__head-date'),
  list = document.querySelector('.nav-list-popup-repair'),
  title = document.getElementById('switch-inner'),
  tableOuter = document.querySelector('.popup-repair-types-content-table');

const setDate = (date) => {
  headDate.innerText = date;
};

const getTabs = (data) => {
  const tabs = [];

  data.forEach(tab => {
    tabs.push(tab.title);
  });

  return tabs;
};

const setTabs = (tabs) => {
  list.innerHTML = '';

  for (const tab of tabs) {
    list.insertAdjacentHTML('beforeend', `
      <button class="button_o popup-repair-types-nav__item">${tab}</button>
    `);
  }
};

const getPrices = (data) => {
  let prices = '';
  
  for (const price of data.priceList) {
    prices += `
      <tr class="mobile-row showHide">
        <td class="repair-types-name">${price.typeService}</td>
        <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
        <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
        <td class="repair-types-value">${price.units}</td>
        <td class="repair-types-value">${price.cost} руб.</td>
      </tr>
    `;
  }

  return prices;
};

const setPrices = (data) => {
  tableOuter.innerHTML = '';

  for (const item of data) {
    tableOuter.insertAdjacentHTML('beforeend', `
      <table class="popup-repair-types-content-table__list">
        ${getPrices(item)}
      </table>
    `);
  }
};

const priceHandler = (data) => {
  const date = data.shift().date;
  
  setDate(date);
  setTabs(getTabs(data));
  setPrices(data);

  const slider = new SliderCarousel({
    main: `.popup-repair-types-content-table-wrap`,
    wrap: `.popup-repair-types-content-table`,
  
    tabs: '.nav-list-popup-repair',
    tabClass: 'popup-repair-types-nav__item',
  
    numberSlider: sliderCounter.count,
    slidesToShow: 1,
  });
  
  slider.init();
};

const tabHandler = () => {
  const target = event.target;

  if (!target.matches('button')) return;

  title.innerText = target.innerText;
}

const services = () => {
  fetch('./db/db.json')
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }

      return response.json();
    }, (error) => {
      messageStatus.src = messages.error;
      console.error(error);
    })
    .then(priceHandler);
    

  list.addEventListener('click', tabHandler);
};

export default services;