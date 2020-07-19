import React from 'react'
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js'

function Main ({onEditProfile, onAddPlace, onEditAvatar}) {
    return (
        <main className="content">
        <section className="profile">
          <img src="../images/zhak-iv-kusto.png" alt="Аватар" className="profile__avatar" onClick={onEditAvatar} />
          <span className="profile__edit-avatar"></span>
          <div className="profile__info">
            <div className="profile__change-elem">
              <h1 className="profile__name"></h1>
              <button className="profile__btn-edit" onClick={onEditProfile}>
                <div className="btn-image btn-image_edit"></div>
              </button>
            </div>
            <p className="profile__signature"></p>
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

        <PopupWithForm name="edit" title="Редактировать профиль" inpitSignature="Сохранить">
          <input name="name" type="text" className="popup__input popup__input-name" id='name-input' required pattern="[A-Za-zА-Яа-я -]{2,40}" placeholder="Имя" />
          <span className="popup__input-error" id="name-input-error"></span>
          <input name="about" type="text" className="popup__input popup__input-signature" id='signature-input' required minLength='2' maxLength='200' placeholder="О себе" />
          <span className="popup__input-error" id="signature-input-error"></span>
        </PopupWithForm>

        <PopupWithForm name="place" title="Новое место" inpitSignature="Создать">
          <input name="name" type="text" className="popup__input popup__input-name" id='name-input' required pattern="[A-Za-zА-Яа-я -]{1,30}" placeholder="Название" />
          <span className="popup__input-error" id="name-input-error"></span>
          <input name="link" type="url" className="popup__input popup__input-signature" id='signature-input' required placeholder="Ссылка на картинку" />
          <span className="popup__input-error" id="signature-input-error"></span>
        </PopupWithForm>

        <PopupWithForm name="avatar" title="Обновить аватар" inpitSignature="Сохранить">
          <input name="avatar" type="url" className="popup__input popup__input-signature" id='signature-input' required placeholder="Ссылка на картинку" />
          <span className="popup__input-error" id="signature-input-error"></span>
        </PopupWithForm>

        <PopupWithForm name="delete" title="Вы уверены?" inpitSignature="Да" />

        <ImagePopup />
      </main>
    )
}

export default Main;