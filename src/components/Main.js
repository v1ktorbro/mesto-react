import React from 'react'

function Main () {
    return (
        <main className="content">
        <section className="profile">
          <img src="../images/zhak-iv-kusto.png" alt="Аватар" className="profile__avatar" />
          <span className="profile__edit-avatar"></span>
          <div className="profile__info">
            <div className="profile__change-elem">
              <h1 className="profile__name"></h1>
              <button className="profile__btn-edit">
                <div className="btn-image btn-image_edit"></div>
              </button>
            </div>
            <p className="profile__signature"></p>
          </div>
          <button className="profile__btn-plus">
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
       <section className="popap-edit popap popap_closed">
        <form className="popap__container" noValidate>
          <span className="popap__close"></span>
          <h2 className="popap__title">Редактировать профиль</h2>
          <input name="name" type="text" className="popap__input popap__input-name" id='name-input' required pattern="[A-Za-zА-Яа-я -]{2,40}" placeholder="Имя" />
          <span className="popap__input-error" id="name-input-error"></span>
          <input name="about" type="text" className="popap__input popap__input-signature" id='signature-input' required minLength='2' maxLength='200' placeholder="О себе" />
          <span className="popap__input-error" id="signature-input-error"></span>
          <button type="submit" className="popap__input-save">
            <p className="popap__text-color">Сохранить</p>
          </button>
        </form>
       </section>
       <section className="popap-place popap popap_closed">
        <form className="popap__container" noValidate>
          <span className="popap__close"></span>
          <h2 className="popap__title">Новое место</h2>
          <input name="name" type="text" className="popap__input popap__input-name" id='name-input' required pattern="[A-Za-zА-Яа-я -]{1,30}" placeholder="Название" />
          <span className="popap__input-error" id="name-input-error"></span>
          <input name="link" type="url" className="popap__input popap__input-signature" id='signature-input' required placeholder="Ссылка на картинку" />
          <span className="popap__input-error" id="signature-input-error"></span>
          <button type="submit" className="popap__input-save">
            <p className="popap__text-color">Создать</p>
          </button>
        </form>
      </section>
        <section className="popap popap-image popap_closed">
          <div className="popap-image__container">
            <img alt="" className="popap-image__content" />
            <span className="popap__close"></span>
            <p className="popap-image__name"></p>
          </div>
        </section>
      <section className="popap-delete popap popap_closed">
       <form className="popap__container" noValidate>
         <span className="popap__close"></span>
         <h2 className="popap__title">Вы уверены?</h2>
         <button type="submit" className="popap__input-save">
           <p className="popap__text-color">Да</p>
         </button>
       </form>
     </section>
     <section className="popap-avatar popap popap_closed">
      <form className="popap__container" noValidate>
        <span className="popap__close"></span>
        <h2 className="popap__title">Обновить аватар</h2>
        <input name="avatar" type="url" className="popap__input popap__input-signature" id='signature-input' required placeholder="Ссылка на картинку" />
        <span className="popap__input-error" id="signature-input-error"></span>
        <button type="submit" className="popap__input-save">
          <p className="popap__text-color">Сохранить</p>
        </button>
      </form>
    </section>
      </main>
    )
}

export default Main;