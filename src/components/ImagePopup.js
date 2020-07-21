import React from 'react'

function ImagePopup ({onClose, card}) {
    return (
        <section className={`popup popup-image ${card.boolean ? '' : 'popup_closed'}`}>
          <div className="popup-image__container">
            <img src={card.link} alt={`Картинка с изображением ${card.name}`.toLowerCase()} className="popup-image__content" />
            <span className="popup__close" onClick={onClose}></span>
            <p className="popup-image__name">{card.name}</p>
          </div>
        </section>
    )
}

export default ImagePopup