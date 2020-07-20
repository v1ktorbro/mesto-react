import React, { useState } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
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
  }

  return (
    <>
      <Header />
      <Main 
      onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} 
      onEditAvatar={handleEditAvatarClick} closePopup={closeAllPopups} 
      stateEditPopup={isEditProfilePopupOpen} stateAddCardPopup={isAddPlacePopupOpen}
      stateAvatarPopup={isEditAvatarPopupOpen}
      />
      <Footer />
    </>
  );
}

export default App;
