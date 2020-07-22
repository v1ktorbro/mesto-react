import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js'
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    name: '',
    link: ''
  })

  function handleCardClick(name, link) {
    setSelectedCard({
      isOpen: true,
      name: name,
      link: link
    })
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }
  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups () {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({
      isOpen: false,
      name: '',
      link: ''
    })
  }

  return (
    <>
      <Header />
      <Main 
      onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} 
      />
      <PopupWithForm name="edit" title="Редактировать профиль" inputSignature="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
            <input name="name" type="text" className="popup__input popup__input-name" id='name-input'   required pattern="[A-Za-zА-Яа-я -]{2,40}" placeholder="Имя" />
            <span className="popup__input-error" id="name-input-error"></span>
            <input name="about" type="text" className="popup__input popup__input-signature"   id='signature-input' required minLength='2' maxLength='200' placeholder="О себе" />
            <span className="popup__input-error" id="signature-input-error"></span>
      </PopupWithForm>
      <PopupWithForm name="place" title="Новое место" inputSignature="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} >
            <input name="name" type="text" className="popup__input popup__input-name" id='name-input'   required pattern="[A-Za-zА-Яа-я -]{1,30}" placeholder="Название" />
            <span className="popup__input-error" id="name-input-error"></span>
            <input name="link" type="url" className="popup__input popup__input-signature"   id='signature-input' required placeholder="Ссылка на картинку" />
            <span className="popup__input-error" id="signature-input-error"></span>
      </PopupWithForm>
      <PopupWithForm name="avatar" title="Обновить аватар" inputSignature="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} >
            <input name="avatar" type="url" className="popup__input popup__input-signature"   id='signature-input' required placeholder="Ссылка на картинку" />
            <span className="popup__input-error" id="signature-input-error"></span>
        </PopupWithForm>
      <PopupWithForm name="delete" title="Вы уверены?" inputSignature="Да" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <Footer />
    </>
  );
}

export default App;
