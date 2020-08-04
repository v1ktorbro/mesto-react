import React from 'react'
import Card from './Card.js'
import api from '../utils/Api.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'
import { InitialCardsContext } from '../contexts/InitialCardsContext.js'

function Main ({
                  onEditProfile, 
                  onAddPlace, 
                  onEditAvatar, 
                  onCardClick,
                  setCards
              }) 
{
  const currentUser = React.useContext(CurrentUserContext);
  const cards = React.useContext(InitialCardsContext)

  function handleCardLike(card) {
    //проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    (!isLiked ? api.putLikeCard(card._id) : api.deleteLikeCard(card._id))
    .then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((currentCard) => currentCard._id === card._id ? newCard : currentCard);
      // Обновляем стейт
      setCards(newCards)
    })
    .catch(err => console.log(err)) 
  } 

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => {
      const newCards = cards.filter((currentCard) => currentCard._id !== card._id)
      setCards(newCards)
    })
    .catch(err => console.log(err))
  }

    return (
        <main className="content">
          <section className="profile">
            <img src={currentUser.avatar} alt="Аватар" className="profile__avatar" onClick={onEditAvatar} />
            <span className="profile__edit-avatar"></span>
            <div className="profile__info">
              <div className="profile__change-elem">
                <h1 className="profile__name">{currentUser.name}</h1>
                <button className="profile__btn-edit" onClick={onEditProfile}>
                  <div className="btn-image btn-image_edit"></div>
                </button>
              </div>
              <p className="profile__signature">{currentUser.about}</p>
            </div>
            <button className="profile__btn-plus" onClick={onAddPlace}>
                <div className="btn-image btn-image_plus"></div>
            </button>
          </section>
          <section className="cards">
            {cards.map((card) => 
              <Card key={card._id} card={card}
                currentUser={currentUser}
                onCardLike={handleCardLike} 
                onCardDelete={handleCardDelete} 
                onCardClick={onCardClick}
              /> 
            )}
          </section> 
      </main>
    )
}

export default Main;