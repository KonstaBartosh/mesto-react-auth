import { useContext, useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { PopupContext } from "../contexts/PopupContext";


function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading, showLoader }) {
	const currentUser = useContext(CurrentUserContext);
	const input = useRef();
	const handleOverlayClick = useContext(PopupContext);

	/** С помощью эффекта отображаем пустые поля после ввода ссылки */
	useEffect(() => {
		input.current.value = ''
	}, [currentUser])

	function handleSubmit(evt) {
		evt.preventDefault();
		onUpdateAvatar({
			avatar: input.current.value,
		});
		// setLoading(true);
		// setTimeout(() => {
    //   // По завершении запроса, установите isLoading обратно в false
    //   setLoading(false);
    // }, 1000);
		showLoader();
	}

	return (
		<PopupWithForm
			name="userpic"
			title="Обновить аватар"
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit}
			buttonText="Обновить"
			handleOverlayClick={handleOverlayClick}
			isLoading={isLoading}
			>
			<input
				name="avatar"
				id="avatar-input"
				type="url"
				className="popup__field form__input"
				placeholder="Ссылка на картинку"
				ref={input}
				required
			/>
			<span className="avatar-input-error form__error-message"></span>
		</PopupWithForm>
	)
}

export default EditAvatarPopup;