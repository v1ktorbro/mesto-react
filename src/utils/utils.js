export {
  formObject, configFormPlus, renderLoading
};

const formObject = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__input-save', // кнопка 'сохранить' | 'создать'
  inactiveButtonClass: 'popup__input-save_inactive',
  inputErrorClass: 'popup__input-name_type_error', //красная линия под инпутом
  errorSpanClass: 'popup__input-error_active' //span с текстом ошибки
};

const configFormPlus = (popup, formObject) => {
  const form = document.querySelector(popup);
  const inputList = form.querySelectorAll(".popup__input");
  inputList.forEach(input => input.value = "");
  //т.к в форме создания карточек изначально инфа отсутствует, кнопка будет неактивной при открытии
  const btnCreate = form.querySelector(".popup__input-save")
  btnCreate.classList.add(formObject.inactiveButtonClass);
};

const renderLoading = (isLoading, popupSelector, text) => {
  const popup = document.querySelector(popupSelector)
  const btnSave = popup.querySelector('.popup__text-color');
  if(isLoading) {
    btnSave.textContent = 'Сохранение...'
  } else {
    btnSave.textContent = text
  }
}
