import React from 'react'

function PopupWithForm ({title, name}) {
    return (
        <section className="popup-edit popup popup_closed">
        <form className="popup__container" noValidate>
          <span className="popup__close"></span>
          <h2 className="popup__title">{title}</h2>
          <input name="name" type="text" className="popup__input popup__input-name" id='name-input' required pattern="[A-Za-zА-Яа-я -]{2,40}" placeholder="Имя" />
          <span className="popup__input-error" id="name-input-error"></span>
          <input name="about" type="text" className="popup__input popup__input-signature" id='signature-input' required minLength='2' maxLength='200' placeholder="О себе" />
          <span className="popup__input-error" id="signature-input-error"></span>
          <button type="submit" className="popup__input-save">
            <p className="popup__text-color">Сохранить</p>
          </button>
        </form>
       </section>
    )
}

export default PopupWithForm