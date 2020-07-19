import React from 'react'

function ImagePopup () {
    return (
        <section className="popup popup-image popup_closed">
          <div className="popap-image__container">
            <img alt="" className="popap-image__content" />
            <span className="popup__close"></span>
            <p className="popap-image__name"></p>
          </div>
        </section>
    )
}

export default ImagePopup