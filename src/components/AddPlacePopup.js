import React, { useRef } from 'react'
import PopupWithForm from './PopupWithForm.js'

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
    const nameRef = useRef('')
    const linkRef = useRef('')
    function handleSubmit(evt) {
        evt.preventDefault()
        onAddPlace({
            name: nameRef.current.value,
            link: linkRef.current.value
        })
    }

    return (
        <PopupWithForm 
            name="place" 
            title="Новое место" 
            inputSignature="Создать" 
            isOpen={isOpen} 
            onClose={onClose}
            onSubmit={handleSubmit} 
        >
            <input 
                name="name" 
                ref={nameRef}
                type="text" 
                className="popup__input popup__input-name" 
                id='name-input'   
                required 
                pattern="[A-Za-zА-Яа-я -]{1,30}" 
                placeholder="Название" 
            />
            <span className="popup__input-error" id="name-input-error"></span>
            <input 
                name="link" 
                type="url" 
                ref={linkRef}
                className="popup__input popup__input-signature"   
                id='signature-input' 
                required 
                placeholder="Ссылка на картинку" 
            />
            <span className="popup__input-error" id="signature-input-error"></span>
        </PopupWithForm>
    )
}
export default AddPlacePopup