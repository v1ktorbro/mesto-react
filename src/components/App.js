import React, { useState } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js'

function App() {
  function handleEditProfileClick() {
    const [] = React.useState();
    document.querySelector(".popup-edit").classList.remove("popup_closed")
  }
  function handleEditAvatarClick() {
    document.querySelector(".popup-avatar").classList.remove("popup_closed")
  }
  function handleAddPlaceClick () {
    document.querySelector(".popup-place").classList.remove("popup_closed")
  }
  return (
    <>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />
    </>
  );
}

export default App;
