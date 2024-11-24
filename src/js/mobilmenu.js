(() => {
  const refs = {
      openMenuBtn: document.querySelector(".js-open-menu"),
      closeMenuBtn: document.querySelector(".js-close-menu"),
      menuOverlay: document.querySelector("[data-modal]"),
  };

  const toggleMenu = () => {
      refs.menuOverlay.classList.toggle("is-hidden");
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  // Закрыть меню при нажатии вне его (опционально)
  refs.menuOverlay.addEventListener("click", (event) => {
      if (event.target === refs.menuOverlay) {
          toggleMenu();
      }
  });
})();