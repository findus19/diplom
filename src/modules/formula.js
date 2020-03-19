const wrapper = document.querySelector('.formula .wrapper_small');

const tooltipOver = (tooltip) => {
  const clientTopBegin = 0;
  if (tooltip.getBoundingClientRect().top < clientTopBegin) {
    const formulaItem = tooltip.closest('.formula-item');
    console.dir(formulaItem);
    tooltip.classList.add('tooltip_reverse');
    formulaItem.classList.add('formula-item_cover');
  }
};

const tooltipOut = (tooltip) => {
  const formulaItem = tooltip.closest('.formula-item');
  
  tooltip.classList.remove('tooltip_reverse');
  formulaItem.classList.remove('formula-item_cover');
};

const tooltipTamer = (event) => {
  const target = event.target;
  
  if (!target.matches('.formula-item__icon-inner-text')) return;
  
  const tooltip = target.previousElementSibling.previousElementSibling;

  if (event.type === 'mouseout') {
    tooltipOut(tooltip);
  } else {
    tooltipOver(tooltip);
  }
};

const tooltipsFormula = () => {
  wrapper.addEventListener('mouseover', tooltipTamer);
  wrapper.addEventListener('mouseout', tooltipTamer);
};

export default tooltipsFormula;