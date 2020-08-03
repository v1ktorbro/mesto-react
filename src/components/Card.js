import React from 'react'

function Card ({currentUser, card, onCardClick}) {

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `${isOwn ? 'card__btn-delete' : 'card__btn-delete_hidden'}`
  );

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(like => like._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `${isLiked ? 'btn-image btn-image_like btn-image_like_active' : 'btn-image btn-image_like'}`
    ); 

  function handleClick() {
    onCardClick(card.name, card.link)
  }

    return (
        <div className="card">
            <img src={card.link} alt={`карточка с изображением ${card.name}`} className="card__image" onClick={handleClick} />
            <button className={cardDeleteButtonClassName}>
              <div className="btn-image btn-image_delete"></div>
            </button>
            <div className="card__info">
              <h2 className="card__title">{card.name}</h2>
              <div className="card__block-like">
                <button className="card__btn-like">
                  <div className={cardLikeButtonClassName}></div>
                </button>
                <span className="card__count-like">{card.likes.length}</span>
              </div>
            </div>
        </div>
  )
}

export default Card