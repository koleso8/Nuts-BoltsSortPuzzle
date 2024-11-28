(() => {
  const refs = {
    openMenuBtn: document.querySelector('.js-open-menu'),
    closeMenuBtn: document.querySelector('.js-close-menu'),
    menuOverlay: document.querySelector('[data-modal]'),
    menuItems: document.querySelectorAll('.menu a'),
    body: document.body,
  };

  const toggleMenu = () => {
    refs.menuOverlay.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll')
  };

  

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  refs.menuOverlay.addEventListener('click', event => {
    if (event.target === refs.menuOverlay) {
      toggleMenu();
    }
  });
  refs.menuItems.forEach(item => {
    item.addEventListener('click', () => {
      toggleMenu();
    });
  });
})();
