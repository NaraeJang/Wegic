import { useWegicContext } from '../App';
import { useCommentContext } from '../componenets/Comment';
import ModalTitle from './ModalTitle';

const ModalCommentDelete = () => {
  const { isFrench } = useWegicContext();
  const { isDeleteModalOpen, setIsDeleteModalOpen } = useCommentContext();

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
