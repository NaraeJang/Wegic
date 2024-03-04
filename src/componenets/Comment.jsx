import { createContext, useContext, useEffect, useState } from 'react';
import {
  ModalCommentDelete,
  CommentListItem,
  CommentPagination,
  TitleNoDivider,
  Alert,
} from '../subCompoenets';
import { useWegicContext } from '../App';
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';

const CommentContext = createContext();

const Comment = () => {
  const { isFrench, fetchApi } = useWegicContext();
  const [alarmText, setAlarmText] = useState({
    textFR: '',
    textEN: '',
    alertStatus: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isAlarming, setIsAlarming] = useState(true);
  const [getLocalStorage, setGetLocalStorage] = useState(
    localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []
  );
  let dataFromGoogle;
  let outputArrayFromGoogleData = [];

  // SET PAGINATION
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the comments to display on the current page
  const displayedComments = getLocalStorage.slice(startIndex, endIndex);

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
      message: innerArray[2],
      password: innerArray[3],
      createdAt: innerArray[4],
    };

    return newItem;
  };

  // ADD LOCAL STORAGE
  const addToLocalStorage = (commentData) => {
    const newComment = commentData.reverse();

    // const newCommentStorage = [newComment, ...getLocalStorage];
    setGetLocalStorage(newComment);

    localStorage.setItem('list', JSON.stringify(newComment));
  };

  // CREATE COMMENT LIST
  const createListItem = ({ id, name, message, password, createdAt }) => {
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
      const res = await fetch(fetchApi, { method: 'GET' });

      const rep = await res.text();

      const data = JSON.parse(rep);
      // console.log(data);

      dataFromGoogle = data.content;
      setIsLoading(false);

      outputArrayFromGoogleData = dataFromGoogle.map((innerArray) =>
        outputArrayFromGoogle(innerArray)
      );

      addToLocalStorage(outputArrayFromGoogleData);
      setCurrentPage(1);
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

    const id = nanoid();
    const createdAt = dayjs().format('DD/MM/YYYY');

    formData.append('CreatedAt', createdAt);
    formData.append('Id', id);

    console.log(Object.fromEntries(formData));

    if (!name || !message) {
      commentAlarm(
        'Veuillez fournir des valeurs appropriées.',
        'Please provide proper values.',
        'danger'
      );

      return;
    }

    if (name && message) {
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
  }, []);

  return (
    <CommentContext.Provider
      value={{
        getLocalStorage,
        setGetLocalStorage,
        isLoading,
        setIsLoading,
        bringDataFromGoogleSheet,
        displayedComments,
        itemsPerPage,
        currentPage,
        setCurrentPage,
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

        {displayedComments.length > 1 && (
          <div className="container">
            <div className="comment__list">
              {displayedComments.map((comment, index) => {
                return (
                  <CommentListItem
                    key={`${index}commentList`}
                    comment={comment}
                  />
                );
              })}
            </div>
            <CommentPagination />
          </div>
        )}
      </section>
    </CommentContext.Provider>
  );
};

export const useCommentContext = () => useContext(CommentContext);
export default Comment;
