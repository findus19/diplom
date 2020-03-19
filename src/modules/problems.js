const wrapper = document.querySelector('.problems .wrapper_middle');

const tooltipOver = (tooltip) => {
  const clientTopBegin = 0;
  
  if (tooltip.getBoundingClientRect().top < clientTopBegin) {
    const problemsItem = tooltip.closest('.problems-item');
    
    tooltip.classList.add('tooltip_reverse');
    problemsItem.classList.add('problems-item_cover');
  }
};

const tooltipOut = (tooltip) => {
  const problemsItem = tooltip.closest('.problems-item');
  
  tooltip.classList.remove('tooltip_reverse');
  problemsItem.classList.remove('problems-item_cover');
};

const tooltipTamer = (event) => {
  const target = event.target;
  if (!target.matches('.problems-item__icon-inner')) {return};
  
  const tooltip = target.previousElementSibling.previousElementSibling;
  console.log(tooltip);

  if (event.type === 'mouseout') {
    tooltipOut(tooltip);
  } else {
    tooltipOver(tooltip);

  }
};

const tooltipsProblems = () => {
  wrapper.addEventListener('mouseover', tooltipTamer);
  wrapper.addEventListener('mouseout', tooltipTamer);
};

export default tooltipsProblems;