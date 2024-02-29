import { createContext, useContext, useEffect, useState } from 'react';
import {
  ModalCommentDelete,
  CommentListItem,
  TitleNoDivider,
  Alert,
} from '../subCompoenets';
import { useWegicContext } from '../App';
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';

const CommentContext = createContext();

const Comment = () => {
  const [alarmText, setAlarmText] = useState({
    textFR: '',
    textEN: '',
    alertStatus: '',
  });
  const [isAlarming, setIsAlarming] = useState(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState({});
  const { isFrench, fetchApi } = useWegicContext();
  const [getLocalStorage, setGetLocalStorage] = useState(
    localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []
  );

  // Display Alert
  function commentAlarm(textFR, textEN, alertStatus) {
    setIsAlarming(true);
    setAlarmText({ textFR, textEN, alertStatus });

    // remove alert
    setTimeout(function () {
      setIsAlarming(false);
      setAlarmText({ textFR: '', textEN: '', alertStatus: '' });
    }, 3000);
  }

  const addToLocalStorage = (id, name, message, password, createdAt) => {
    const comment = {
      id,
      name,
      message,
      password,
      createdAt,
    };

    const newCommentStorage = [comment, ...getLocalStorage];
    setGetLocalStorage(newCommentStorage);

    localStorage.setItem('list', JSON.stringify(newCommentStorage));
  };

  // CREATE COMMENT LIST
  const createListItem = (id, name, message, password, createdAt) => {
    // Check if the item already exists
    const existingItem = getLocalStorage.find((item) => item.id === id);

    if (!existingItem) {
      // Create a new item
      const comment = {
        id,
        name,
        message,
        password,
        createdAt,
      };

      setGetLocalStorage((prev) => [comment, ...prev]);
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get('CommentName');
    const message = formData.get('CommentMessage');
    const password = formData.get('CommentPassword');
    const id = nanoid();
    const createdAt = dayjs().format('DD/MM/YYYY');

    formData.append('CreatedAt', createdAt);

    console.log(Object.fromEntries(formData));

    if (!name || !message || !password) {
      commentAlarm(
        'Veuillez fournir des valeurs appropriées.',
        'Please provide proper values.',
        'danger'
      );

      return;
    }

    if (name && message && password) {
      createListItem(id, name, message, password, createdAt);
      addToLocalStorage(id, name, message, password, createdAt);

      fetch(fetchApi, {
        method: 'POST',
        body: formData,
      })
        .then((res) => res.text())
        .then((data) => {
          console.log(data);
          commentAlarm(
            'Message ajouté à la liste.',
            'Message added to the list',
            'success'
          );
        })
        .catch((err) => {
          commentAlarm(
            `Quelque chose s'est mal passé, veuillez réessayer plus tard.`,
            'Something went wrong, please try it later.',
            'danger'
          );
          return console.log(err);
        });

      e.target.reset();
      return;
    }
  };

  useEffect(() => {
    if (getLocalStorage) {
      getLocalStorage.map((comment) => {
        const { id, name, message, password, createdAt } = comment;
        createListItem(id, name, message, password, createdAt);
      });
    }
  }, [getLocalStorage]);

  return (
    <CommentContext.Provider
      value={{
        isDeleteModalOpen,
        setIsDeleteModalOpen,
        getLocalStorage,
        setGetLocalStorage,
        deleteItem,
        setDeleteItem,
      }}>
      <ModalCommentDelete />
      <section className="comment">
        <div className="container">
          <TitleNoDivider
            titleEn="COMMENTS SECTION"
            titleFr="RUBRIQUE DES COMMENTAIRES"
          />

          <form id="comment-form" onSubmit={handleSubmit}>
            <div className="mb-small comment-input-name">
              <label htmlFor="name">
                {isFrench ? 'Nom Complet' : 'Name'}
                <span className="obligatory">*</span>
              </label>
              <input type="text" id="name" name="CommentName" />
            </div>

            <div className="mb-small comment-input-message">
              <label htmlFor="message">
                {isFrench ? 'Commentaire' : 'Message'}
                <span className="obligatory">*</span>
              </label>
              <textarea
                name="CommentMessage"
                id="message"
                cols="30"
                rows="10"
                placeholder={
                  isFrench
                    ? `Je vous souhaite beaucoup d'amour et de bonheur.`
                    : 'Wishing you lots of love and happiness.'
                }></textarea>
            </div>

            <div className="comment-input-password">
              <label htmlFor="password">
                {isFrench ? 'Mot de Passe' : 'Password'}
                <span className="obligatory">*</span>
              </label>
              <input type="password" name="CommentPassword" id="password" />
            </div>

            <button
              className="btn btn-primary btn-block"
              type="submit"
              id="comment-submit-btn">
              {isFrench ? 'Laisser un Message' : 'Leave A Message'}
            </button>
            {isAlarming && (
              <Alert alarmText={alarmText} isAlarming={isAlarming} />
            )}
          </form>
        </div>

        <div className="container">
          <div className="comment__list">
            {getLocalStorage.map((comment, index) => {
              return (
                <CommentListItem
                  key={`${index}commentList`}
                  comment={comment}
                />
              );
            })}
          </div>
        </div>
      </section>
    </CommentContext.Provider>
  );
};

export const useCommentContext = () => useContext(CommentContext);
export default Comment;
