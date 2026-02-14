(() => {
  const refs = {
    // Переконайтеся, що у кнопки в HTML є клас .hero-btn
    openModalBtn: document.querySelector('.hero-btn'),
    // Кнопка-хрестик для закриття
    closeModalBtn: document.querySelector('.popup-close'),
    // Обгортка (бекдроп) модального вікна
    modal: document.querySelector('.popup-wrapper'),
    burger: document.querySelector('.burger-btn'),
    burgerClose: document.querySelector('.burger-close'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.burger.addEventListener('click', toggleBurger);
  refs.burgerClose.addEventListener('click', toggleBurger);


  function toggleModal() {
    // Використовуємо .is-open для показу/приховування модального вікна
    refs.modal.classList.toggle('is-open');
    // Блокуємо скрол основної сторінки
    document.body.classList.toggle('no-scroll');
  }

  function toggleBurger() {
    const burgerMenu = document.querySelector('.burger-menu');
    burgerMenu.classList.toggle('is-open');
  }
})();