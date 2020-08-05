import React from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'
import PopupWithForm from './PopupWithForm.js'

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const imageRef = React.useRef('')
    const currentUser = React.useContext(CurrentUserContext)

    function handleSubmit(evt) {
        evt.preventDefault()
        onUpdateAvatar({
            avatar: imageRef.current.value
        })
    }

    return (
        <PopupWithForm 
            name="avatar" 
            title="Обновить аватар" 
            inputSignature="Сохранить" 
            isOpen={isOpen} 
            onClose={onClose}
            onSubmit={handleSubmit} 
        >
            <input 
                name="avatar" 
                ref={imageRef}
                defaultValue={currentUser.avatar}
                type="url" 
                className="popup__input popup__input-signature" 
                id='signature-input' 
                required 
                placeholder="Ссылка на картинку" 
            />
            <span className="popup__input-error" id="signature-input-error" />
        </PopupWithForm>
    )
}

export default EditAvatarPopup