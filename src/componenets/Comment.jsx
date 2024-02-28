import { createContext, useContext, useState } from 'react';
import { ModalCommentDelete } from '../subCompoenets';
import { useWegicContext } from '../App';

const CommentContext = createContext();

const Comment = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { isFrench } = useWegicContext();

  return (
    <CommentContext.Provider
      value={{ isDeleteModalOpen, setIsDeleteModalOpen }}>
      <ModalCommentDelete />

      <section className="comment">
        <div className="container">
          <h2>{isFrench ? 'RUBRIQUE DES COMMENTAIRES' : 'COMMENTS SECTION'}</h2>

          <form id="comment-form">
            <div className="mb-small">
              <label htmlFor="name">
                {isFrench ? 'Nom Complet' : 'Name'}
                <span className="obligatory">*</span>
              </label>
              <input type="text" id="name" name="name" />
              <div className="alert">
                <p></p>
              </div>
            </div>

            <div className="mb-small">
              <label htmlFor="message">
                {isFrench ? 'Commentaire' : 'Message'}
                <span className="obligatory">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder={
                  isFrench
                    ? `Je vous souhaite beaucoup d'amour et de bonheur.`
                    : 'Wishing you lots of love and happiness.'
                }></textarea>
              <div className="alert">
                <p></p>
              </div>
            </div>

            <div className="mb-small">
              <label htmlFor="password">
                {isFrench ? 'Mot de Passe' : 'Password'}
                <span className="obligatory">*</span>
              </label>
              <input type="password" name="password" id="password" />
              <div className="alert">
                <p></p>
              </div>
            </div>

            <button
              className="btn btn-primary btn-block"
              type="submit"
              id="comment-submit-btn">
              {isFrench ? 'Laisser un Message' : 'Leave A Message'}
            </button>
            <p className="alert"></p>
          </form>
        </div>

        <div className="container">
          <div className="comment__list"></div>
        </div>
      </section>
    </CommentContext.Provider>
  );
};

export const useCommentContext = () => useContext(CommentContext);
export default Comment;
