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
  const [isLoading, setIsLoading] = useState(false);
  const [isAlarming, setIsAlarming] = useState(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState({});
  const { isFrench, fetchApi } = useWegicContext();
  const [getLocalStorage, setGetLocalStorage] = useState(
    localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []
  );
  let dataFromGoogle;
  let outputArrayFromGoogleData = [];

  // DISPLAY ALARM
  function commentAlarm(textFR, textEN, alertStatus) {
    setIsAlarming(true);
    setAlarmText({ textFR, textEN, alertStatus });

    // remove alert
    setTimeout(function () {
      setIsAlarming(false);
      setAlarmText({ textFR: '', textEN: '', alertStatus: '' });
    }, 3000);
  }

  const outputArrayFromGoogle = (innerArray) => {
    const newItem = {
      id: innerArray[0],
      name: innerArray[1],
      message: innerArray[2].toString(),
      password: innerArray[3].toString(),
      createdAt: innerArray[4],
    };

    return newItem;
  };

  // ADD LOCAL STORAGE
  const addToLocalStorage = (commentData) => {
    const newComment = commentData;

    // const newCommentStorage = [newComment, ...getLocalStorage];
    setGetLocalStorage(newComment);

    localStorage.setItem('list', JSON.stringify(newComment));

    // console.log(outputArrayFromGoogleData);
    // console.log(getLocalStorage);
  };

  // CREATE COMMENT LIST
  const createListItem = (id, name, message, password, createdAt) => {
    // console.log(dataFromGoogle);
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

  // FETCH DATA FROM GOOGLE SHEET.
  const bringDataFromGoogleSheet = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(fetchApi, { method: 'GET', mode: 'no-cors' });

      const rep = await res.text();

      console.log('Response from server:', rep);
      setIsLoading(false);

      if (rep.trim() !== '') {
        const data = JSON.parse(rep);
        dataFromGoogle = data.content;

        // console.log(dataFromGoogle);

        outputArrayFromGoogleData = dataFromGoogle.map((innerArray) =>
          outputArrayFromGoogle(innerArray)
        );

        addToLocalStorage(outputArrayFromGoogleData);

        outputArrayFromGoogleData.map((item) => {
          const { id, name, message, password, createdAt } = item;
          const existingItem = getLocalStorage.find((item) => item.id === id);

          console.log(existingItem);
          if (!existingItem) {
            createListItem(id, name, message, password, createdAt);
          }
        });

        // console.log(outputArrayFromGoogleData);
      } else {
        console.error('Empty response from the server.');
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get('CommentName');
    const message = formData.get('CommentMessage');
    const password = formData.get('CommentPassword');
    const id = nanoid();
    const createdAt = dayjs().format('DD/MM/YYYY');

    formData.append('CreatedAt', createdAt);
    formData.append('Id', id);

    // console.log(Object.fromEntries(formData));

    if (!name || !message || !password) {
      commentAlarm(
        'Veuillez fournir des valeurs appropriées.',
        'Please provide proper values.',
        'danger'
      );

      return;
    }

    if (name && message && password) {
      setIsLoading(true);

      try {
        const res = await fetch(fetchApi, {
          method: 'POST',
          body: formData,
        });

        const rep = await res.text();
        // console.log(rep);
        setIsLoading(false);

        bringDataFromGoogleSheet();

        commentAlarm(
          'Message ajouté à la liste.',
          'Message added to the list',
          'success'
        );
      } catch (error) {
        commentAlarm(
          `Quelque chose s'est mal passé, veuillez réessayer plus tard.`,
          'Something went wrong, please try it later.',
          'danger'
        );
        console.log(error);
      }

      e.target.reset();
      return;
    }
  };

  useEffect(() => {
    bringDataFromGoogleSheet();
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
        isLoading,
        setIsLoading,
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
              id="comment-submit-btn"
              disabled={isLoading}>
              {isLoading
                ? isFrench
                  ? 'soumettant...'
                  : 'Submitting...'
                : isFrench
                ? 'Laisser un Message'
                : 'Leave A Message'}
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
