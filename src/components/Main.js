import React from 'react'
import api from '../utils/Api.js'
import Card from './Card.js'

function Main ({
  onEditProfile, onAddPlace, onEditAvatar, onCardClick
}) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);
  
  React.useEffect(() => {
    Promise.all([api.getInfoUser(), api.getInitialCards()])
    .then(([userData, initialCards]) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
      setCards(initialCards.map(item => ({
        id: item._id,
        link: item.link,
        name: item.name,
        likes: item.likes.length
      })))
    })
    .catch(err => console.log(err))
  }, [])

    return (
        <main className="content">
        <section className="profile">
          <img src={userAvatar} alt="Аватар" className="profile__avatar" onClick={onEditAvatar} />
          <span className="profile__edit-avatar"></span>
          <div className="profile__info">
            <div className="profile__change-elem">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__btn-edit" onClick={onEditProfile}>
                <div className="btn-image btn-image_edit"></div>
              </button>
            </div>
            <p className="profile__signature">{userDescription}</p>
          </div>
          <button className="profile__btn-plus" onClick={onAddPlace}>
              <div className="btn-image btn-image_plus"></div>
          </button>
        </section>
    
        <section className="cards">
          {cards.map(({id, ...props}) => <Card key={id} {...props} onCardClick={onCardClick} /> )}
       </section>

      </main>
    )
}

export default Main;