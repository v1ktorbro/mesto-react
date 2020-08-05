import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js'
import api from '../utils/Api.js';
import EditProfilePopup from './EditProfilePopup.js'
import EditAvatarPopup from './EditAvatarPopup.js'
import AddPlacePopup from './AddPlacePopup.js'
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

  function handleAddPlaceSubmit(dataNewCard) {
    console.log(dataNewCard)
    api.addCard(dataNewCard)
    .then((addNewCard) => {
      setCards([...cards, addNewCard])
    })
    .catch(err => console.log(err))
    .finally(closeAllPopups())
  }

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
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
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
