import { useEffect } from 'react';
import { useCommentContext } from '../componenets/Comment';

const CommentItem = ({ comment }) => {
  const { setIsDeleteModalOpen, deleteItem, setDeleteItem, getLocalStorage } =
    useCommentContext();
  const { id, name, message, password, createdAt } = comment;

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
    setDeleteItem({ id, password });
  };

  return (
    <>
      <article className="comment__container" data-id={id} data-pass={password}>
        <div className="comment__header">
          <div className="comment__header__main">
            <p className="comment__header__main--date">{createdAt}</p>
            <h6 className="comment__header__main--name">{name}</h6>
          </div>
          <button
            type="button"
            className="icon close-icon"
            onClick={openDeleteModal}>
            <i className="fa-solid fa-x"></i>
          </button>
        </div>
        <div className="comment__body">
          <p>{message}</p>
        </div>
        <div className="comment-divider"></div>
      </article>
    </>
  );
};

export default CommentItem;
