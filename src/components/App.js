import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js'
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js'
import api from '../utils/Api.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'
import { InitialCardsContext } from '../contexts/InitialCardsContext.js'


function App() {

  //информация о текущем пользователе
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  //хук для поп-ап окна при нажатии на картинку
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    name: '',
    link: ''
  })

  React.useEffect(() => {
    Promise.all([api.getInfoUser(), api.getInitialCards()])
    .then(([userData, cardsFromApi]) => {
      setCurrentUser(userData);
      setCards(cardsFromApi);
    })
    .catch(err => console.log(err))
  }, [])

  function handleUpdateUser(userData) {
     api.editProfile(userData)
    .then((data) => {
      setCurrentUser(data)
    })
    .catch(err => console.log(err))
    .finally(closeAllPopups()) 
  }

  function handleUpdateAvatar(userData) {
     api.changeAvatar(userData)
    .then((data) => {
      setCurrentUser(data)
    })
    .catch(err => console.log(err))
    .finally(closeAllPopups()) 
  }

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
      <CurrentUserContext.Provider value={currentUser}>
      <InitialCardsContext.Provider value={cards}>
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick} 
          onCardClick={handleCardClick}
          setCards={setCards} 
        />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <PopupWithForm name="place" title="Новое место" inputSignature="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} >
              <input name="name" type="text" className="popup__input popup__input-name" id='name-input'   required pattern="[A-Za-zА-Яа-я -]{1,30}" placeholder="Название" />
              <span className="popup__input-error" id="name-input-error"></span>
              <input name="link" type="url" className="popup__input popup__input-signature"   id='signature-input' required placeholder="Ссылка на картинку" />
              <span className="popup__input-error" id="signature-input-error"></span>
        </PopupWithForm>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <PopupWithForm name="delete" title="Вы уверены?" inputSignature="Да" />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </InitialCardsContext.Provider>
      </CurrentUserContext.Provider>
        <Footer />
    </>
  );
}

export default App;
