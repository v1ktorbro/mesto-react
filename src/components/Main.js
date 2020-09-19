/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({
  onEditProfile, onAddPlace, onEditAvatar, onCardClick,
  cards, onCardLike, onCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <img src={currentUser.avatar} alt="Аватар" className="profile__avatar" onClick={onEditAvatar} />
        <span className="profile__edit-avatar" />
        <div className="profile__info">
          <div className="profile__change-elem">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button type="button" className="profile__btn-edit" onClick={onEditProfile}>
              <div className="btn-image btn-image_edit" />
            </button>
          </div>
          <p className="profile__signature">{currentUser.about}</p>
        </div>
        <button type="button" className="profile__btn-plus" onClick={onAddPlace}>
          <div className="btn-image btn-image_plus" />
        </button>
      </section>
      <section className="cards">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              currentUser={currentUser}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
              onCardClick={onCardClick}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
