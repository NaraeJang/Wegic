import { useWegicContext } from '../App';
import { useCommentContext } from '../componenets/Comment';
import ModalTitle from './ModalTitle';
import xtype from 'xtypejs';

const ModalCommentDelete = () => {
  const { isFrench, displayAlert } = useWegicContext();
  const {
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    getLocalStorage,
    deleteItem,
    setDeleteItem,
  } = useCommentContext();
  const { id, password } = deleteItem;

  const removeFromLocalStorage = (id) => {
    let items = getLocalStorage.filter((item) => item.id !== id);
    console.log(getLocalStorage);

    localStorage.setItem('list', JSON.stringify(items));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const confirmedPassword = formData.get('confirm-password');

    if (!confirmedPassword) {
      return displayAlert(
        `comment-delete-popup__content`,
        'Please fill out this field.',
        'danger'
      );
    }

    if (confirmedPassword !== password) {
      return displayAlert(`delete${id}`, 'Incorrect password.', 'danger');
    }
    // const targetContainerId = document
    //   .getElementById(`comment-popup-delete-btn${id}`)
    //   .getAttribute('data-target');
    // const targetContainer = document.querySelector(
    //   `[data-id="${targetContainerId}"]`
    // );

    // if (!confirmedPassword) {
    //   displayAlert(`delete${id}`, 'Please fill out this field.', 'danger');

    //   return;
    // }

    // if (confirmedPassword !== targetContainer.getAttribute('data-pass')) {
    //   return displayAlert(`delete${id}`, 'Incorrect password.', 'danger');
    // }
    // targetContainer.remove();
    // setIsDeleteModalOpen(false);
    // e.target.reset();
    // removeFromLocalStorage(targetContainerId);
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
        <form
          className={`comment-delete-popup__content`}
          onSubmit={handleSubmit}>
          <label htmlFor="confirm-passward">Mot de Passe</label>
          <input
            type="password"
            id={`confirm-password`}
            name="confirm-password"
          />

          <button
            id={`comment-popup-delete-btn`}
            className="btn btn-primary btn-block"
            type="submit">
            Oui, supprimer
          </button>
        </form>
      </div>
    </div>
  );
};
export default ModalCommentDelete;
