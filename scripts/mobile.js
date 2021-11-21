$(function() {

  // переменные мобильного меню
  const burgerElem = $('.js-mobile-menu');
  const mobileMenuElem = $('.js-header-info-content');

  // переменные мобильной формы
  const formBtnElem = $('.js-header-form__btn');
  const inputSearchElem = $('.js-header-form__search');
  const formElem = $('.js-header-form__form'); 
  const searchCloseElem = $('.js-header-form__btn-close');

  // Раскрыть закрыть меню
  const onBurgerBtnClick = function(event){
    event.preventDefault();
    mobileMenuElem.toggleClass('active-menu');
  };
  burgerElem.on('click', onBurgerBtnClick);

  // Раскрыть форму
  const onFormBtnClick = function(event) {
    event.preventDefault();
    mobileMenuElem.addClass('active-form');
    inputSearchElem.focus();
  };
  formBtnElem.on('click', onFormBtnClick);

  // Закрыть форму
    const onSearchCloseBtnClick = function(event) {
    event.preventDefault();
    mobileMenuElem.removeClass('active-form');
  };
  searchCloseElem.on('click', onSearchCloseBtnClick);

  // Закрыть форму вне поля
  $(document).click(function(event) {
    if ($(event.target).closest(formElem).length) return;
    mobileMenuElem.removeClass('active-form');
    event.preventDefault();
  });
});