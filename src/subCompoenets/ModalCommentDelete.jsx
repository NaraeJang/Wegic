import { useState, useEffect } from 'react';
import { useWegicContext } from '../App';
import { useCommentContext } from '../componenets/Comment';
import Alert from './Alert';
import ModalTitle from './ModalTitle';

import xtype from 'xtypejs';

const ModalCommentDelete = () => {
  const { isFrench } = useWegicContext();
  const {
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    getLocalStorage,
    setGetLocalStorage,
    deleteItem,
    setDeleteItem,
  } = useCommentContext();

  const [alarmText, setAlarmText] = useState({
    textFR: '',
    textEN: '',
    alertStatus: '',
  });
  const [isAlarming, setIsAlarming] = useState(true);

  // Display Alert
  function commentDeleteAlarm(textFR, textEN, alertStatus) {
    setIsAlarming(true);
    setAlarmText({ textFR, textEN, alertStatus });

    // remove alert
    setTimeout(function () {
      setIsAlarming(false);
      setAlarmText({ textFR: '', textEN: '', alertStatus: '' });
    }, 3000);
  }

  const removeFromLocalStorage = (id) => {
    let items = getLocalStorage.filter((item) => item.id !== id);
    setGetLocalStorage(items);
    localStorage.setItem('list', JSON.stringify(items));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const confirmedPassword = formData.get('confirm-password');

    if (!confirmedPassword) {
      return commentDeleteAlarm(
        `Veuillez remplir ce champ`,
        'Please fill out this field.',
        'danger'
      );
    }

    if (confirmedPassword !== deleteItem?.password) {
      return commentDeleteAlarm(
        `Mot de passe incorrect.`,
        'Incorrect password.',
        'danger'
      );
    }
    removeFromLocalStorage(deleteItem.id);
    setIsDeleteModalOpen(false);
    e.target.reset();
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
          {isAlarming && (
            <Alert alarmText={alarmText} isAlarming={isAlarming} />
          )}
        </form>
      </div>
    </div>
  );
};
export default ModalCommentDelete;
