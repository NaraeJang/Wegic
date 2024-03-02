import { useEffect } from 'react';
import { useCommentContext } from '../componenets/Comment';
import dayjs from 'dayjs';

const CommentItem = ({ comment }) => {
  const { setIsDeleteModalOpen, deleteItem, setDeleteItem, getLocalStorage } =
    useCommentContext();
  const { id, name, message, password, createdAt } = comment;

  /* Delete Func
  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
    setDeleteItem({ id, password });
  };*/

  return (
    <>
      <article className="comment__container" data-id={id} data-pass={password}>
        <div className="comment__header">
          <div className="comment__header__main">
            <h6 className="comment__header__main--name">{name}</h6>
          </div>
          <p className="comment__header__main--date">
            {dayjs(createdAt).format('MMMM DD, YYYY')}
          </p>
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
