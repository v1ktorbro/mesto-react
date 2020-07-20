import React from 'react'
import api from '../utils/Api.js'

function Main ({onEditProfile, onAddPlace, onEditAvatar}) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  
  React.useEffect(()=> {
    api.getInfoUser().then(data => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar)
    })
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
          <template id="template-cards">
            <div className="card">
              <img alt="" className="card__image" />
              <button className="card__btn-delete">
                <div className="btn-image btn-image_delete"></div>
              </button>
              <div className="card__info">
                <h2 className="card__title"></h2>
                <div className="card__block-like">
                  <button className="card__btn-like">
                    <div className="btn-image btn-image_like"></div>
                  </button>
                  <span className="card__count-like"></span>
                </div>
              </div>
            </div>
          </template>
       </section>

      </main>
    )
}

export default Main;