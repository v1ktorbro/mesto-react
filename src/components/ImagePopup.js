/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

function ImagePopup({ onClose, card }) {
  return (
    <section className={`popup popup-image ${!card.isOpen && 'popup_closed'}`}>
      <div className="popup-image__container">
        <img src={card.link} alt={`Картинка с изображением ${card.name}`.toLowerCase()} className="popup-image__content" />
        <span className="popup__close" onClick={onClose} />
        <p className="popup-image__name">{card.name}</p>
      </div>
    </section>
  );
}

export default ImagePopup;
