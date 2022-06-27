import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [firstName, setFirstName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: firstName,
      about: description,
    });
  }

  React.useEffect(() => {
    setFirstName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (

    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      inputSignature="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        name="name"
        type="text"
        defaultValue={firstName}
        onChange={(e) => { return setFirstName(e.target.value); }}
        className="popup__input popup__input-name"
        id="name-input"
        required
        pattern="[A-Za-zА-Яа-я -]{2,40}"
        placeholder="Имя"
      />
      <span className="popup__input-error" id="name-input-error" />
      <input
        name="about"
        type="text"
        defaultValue={description}
        onChange={(e) => { return setDescription(e.target.value); }}
        className="popup__input popup__input-signature"
        id="signature-input"
        required
        minLength="2"
        maxLength="200"
        placeholder="О себе"
      />
      <span className="popup__input-error" id="signature-input-error" />
    </PopupWithForm>
  );
}
export default EditProfilePopup;
