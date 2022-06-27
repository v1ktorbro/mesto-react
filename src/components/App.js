import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import CurrentUserContext from '../contexts/CurrentUserContext';
import InitialCardsContext from '../contexts/InitialCardsContext';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    name: '',
    link: '',
  });

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({
      isOpen: false,
      name: '',
      link: '',
    });
  }

  function handleAddPlaceSubmit(dataNewCard) {
    api.addCard(dataNewCard).then((addNewCard) => {
      setCards([...cards, addNewCard]);
      closeAllPopups();
    }).catch((err) => {
      return console.log(err);
    });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((like) => {
      return like._id === currentUser._id;
    });
    (!isLiked ? api.putLikeCard(card._id) : api.deleteLikeCard(card._id)).then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((currentCard) => {
        return currentCard._id === card._id ? newCard : currentCard;
      });
      setCards(newCards);
    }).catch((err) => {
      return console.log(err);
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      const newCards = cards.filter((currentCard) => {
        return currentCard._id !== card._id;
      });
      setCards(newCards);
    }).catch((err) => {
      return console.log(err);
    });
  }

  function handleUpdateUser(userData) {
    api.editProfile(userData).then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    }).catch((err) => {
      return console.log(err);
    });
  }

  function handleUpdateAvatar(userData) {
    api.changeAvatar(userData).then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    }).catch((err) => {
      return console.log(err);
    });
  }

  function handleCardClick(name, link) {
    setSelectedCard({
      isOpen: true,
      name: name,
      link: link,
    });
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  React.useEffect(() => {
    Promise.all([api.getInfoUser(), api.getInitialCards()]).then(([userData, cardsFromApi]) => {
      setCurrentUser(userData);
      setCards(cardsFromApi);
    }).catch((err) => {
      return console.log(err);
    });
  }, []);

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
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <PopupWithForm name="delete" title="Вы уверены?" inputSignature="Да" />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </InitialCardsContext.Provider>
      </CurrentUserContext.Provider>
      <Footer />
    </>
  );
}

export default App;
