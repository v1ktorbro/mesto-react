import React from 'react'
import Card from './Card.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'
import { InitialCardsContext } from '../contexts/InitialCardsContext.js'

function Main ({
    onEditProfile, onAddPlace, onEditAvatar, onCardClick
  }) 
{
  const currentUser = React.useContext(CurrentUserContext);
  const initialCards = React.useContext(InitialCardsContext)

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
            {initialCards.map((card) => 
              <Card key={card._id} card={card}
              currentUser={currentUser} 
              onCardClick={onCardClick} 
              /> 
            )}
          </section> 
      </main>
    )
}

export default Main;