const accordion = () => {
    const accord = document.querySelector('.accordion ul');

    accord.addEventListener('click', () => {
        const target = event.target;
        if (!target.matches('.title_block')) return;

        const current = accord.querySelector('.msg-active');
        
        if (!target.classList.contains('msg-active')) {
            target.classList.add('msg-active');
        }
        
        if (current) {
            current.classList.remove('msg-active');
        }
    })
}

export default accordion;
