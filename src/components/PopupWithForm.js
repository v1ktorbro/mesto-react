import React from 'react'

function PopupWithForm ({title, name, inpitSignature, children}) {
    return (
        <section className={`popup-${name} popup popup_closed`}>
        <form name={name} className="popup__container" noValidate>
          <span className="popup__close"></span>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button type="submit" className="popup__input-save">
            <p className="popup__text-color">{inpitSignature}</p>
          </button>
        </form>
       </section>
    )
}

export default PopupWithForm