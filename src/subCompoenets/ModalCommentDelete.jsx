import { useWegicContext } from '../App';
import { useCommentContext } from '../componenets/Comment';
import ModalTitle from './ModalTitle';

const ModalCommentDelete = () => {
  const { isFrench, displayAlert } = useWegicContext();
  const { isDeleteModalOpen, setIsDeleteModalOpen, getLocalStorage } =
    useCommentContext();

  const removeFromLocalStorage = (id) => {
    let items = getLocalStorage.filter((item) => {
      if (item.id !== id) item;
    });

    localStorage.setItem('list', JSON.stringify(items));
  };

  const deleteItem = () => {
    const password = commentConfirmPassword.value;
    const targetContainerId = commentPopupDeleteBtn.getAttribute('data-target');
    const targetContainer = document.querySelector(
      `[data-id="${targetContainerId}"]`
    );

    if (!password) {
      displayAlert(
        'comment-delete-popup__content',
        'Please fill out this field.',
        'danger'
      );
    } else if (password !== targetContainer.getAttribute('data-pass')) {
      displayAlert(
        'comment-delete-popup__content',
        'Incorrect password.',
        'danger'
      );
      setTimeout(() => {
        setBackToDefault();
      }, 1400);
    } else {
      targetContainer.remove();
      commentPopup.classList.remove('show-popup');
      setBackToDefault();
      removeFromLocalStorage(targetContainerId);
    }
  };

  return (
    <div
      className={
        isDeleteModalOpen
          ? 'modal__bg show comment-delete-popup'
          : 'modal__bg comment-delete-popup'
      }>
      <div className="comment-delete-popup__page">
        <ModalTitle
          textFr="Supprimer le message?"
          textEn="Delete message?"
          onClick={() => setIsDeleteModalOpen(false)}
        />
        <div className="comment-delete-popup__content">
          <label htmlFor="confirm-passward">Mot de Passe</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
          />
          <div className="alert">
            <p></p>
          </div>
          <button
            id="comment-popup-delete-btn"
            className="btn btn-primary"
            href="#"
            type="button"
            onClick={() => {
              setIsDeleteModalOpen(false);
            }}>
            Oui, supprimer
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalCommentDelete;
