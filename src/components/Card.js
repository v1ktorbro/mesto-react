import React from 'react'

function Card ({link, name, likes, onCardClick}) {
  function handleClick() {
    onCardClick(name, link)
  }
    return (
        <div className="card">
            <img src={link} alt={`карточка с изображением ${name}`} className="card__image" onClick={handleClick} />
            <button className="card__btn-delete">
              <div className="btn-image btn-image_delete"></div>
            </button>
            <div className="card__info">
              <h2 className="card__title">{name}</h2>
              <div className="card__block-like">
                <button className="card__btn-like">
                  <div className="btn-image btn-image_like"></div>
                </button>
                <span className="card__count-like">{likes}</span>
              </div>
            </div>
        </div>
  )
}

export default Card