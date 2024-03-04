import { useState } from 'react';
import { useWegicContext } from '../App';
import { useRsvpContext } from '../componenets/Appointment';
import ModalTitle from './ModalTitle';
import RsvpRadioInput from './RsvpRadioInput';
import Alert from './Alert';
import axios from 'axios';

const rsvpApiURL = import.meta.env.VITE_RSVP_API_URL;

const RsvpFirstModal = () => {
  const { isFrench, fetchApi } = useWegicContext();
  const { setIsFirstModalOpen, setIsSecondModalOpen, isLoading, setIsLoading } =
    useRsvpContext();

  const [alarmText, setAlarmText] = useState({
    textFR: '',
    textEN: '',
    alertStatus: '',
  });
  const [isAlarming, setIsAlarming] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    // console.log(Object.fromEntries(formData));
    const fullName = formData.get('FullName');
    const guestNumber = formData.get('GuestNumber');
    const guestName = formData.get('GuestName');
    const meal = formData.get('MealPreference');

    if (!fullName || !meal) {
      return commentDeleteAlarm(
        'Nom ou préférence manquants.',
        'Full Name or Meal Preference is missing.',
        'danger'
      );
    }

    setIsLoading(true);

    try {
      const res = await fetch(fetchApi, {
        method: 'POST',
        body: formData,
      });

      const data = await res.text();

      // console.log(data);
      commentDeleteAlarm(`Envoi des données..`, 'Sending data...', 'success');
      setIsFirstModalOpen(false);
      setIsSecondModalOpen(true);
      setIsLoading(false);

      return data;
    } catch (error) {
      commentDeleteAlarm(
        `Quelque chose s'est mal passé, veuillez réessayer plus tard.`,
        'Something went wrong, please try it later.',
        'danger'
      );
      return console.log(err);
    }
  };

  return (
    <div className="rsvp__popup">
      <div className="rsvp__popup__page">
        <ModalTitle
          textFr="Votre Présence"
          textEn="Your Attendance"
          onClick={() => setIsFirstModalOpen(false)}
        />
        <div className="rsvp__popup__page__content">
          <form className="rsvp-form" onSubmit={handleSubmit}>
            <div className="rsvp-form__name">
              <label htmlFor="rsvpFullName">
                <h4>{isFrench ? 'Nom Complet*' : 'Full Name*'}</h4>
              </label>
              <input type="text" id="rsvpFullName" name="FullName" />
            </div>
            <div className="rsvp-form__guests--number">
              <label htmlFor="rsvpGuestNumber">
                <h4>{isFrench ? `Nombre d’Invités` : 'Number of Guests'}</h4>
              </label>
              <input
                type="number"
                id="rsvpGuestNumber"
                name="GuestNumber"
                required="required"
                defaultValue="0"
              />
            </div>
            <div className="rsvp-form__guests--name">
              <label htmlFor="rsvpGuestName">
                <h4>
                  {isFrench
                    ? ` Noms des Invités additionels`
                    : 'Name of Additional Guests'}
                </h4>
              </label>
              <input type="text" id="rsvpGuestName" name="GuestName" />
            </div>
            <div className="rsvp-form__meal">
              <h4>
                {isFrench ? `Préférence alimentaire*` : `Meal Preference*`}
              </h4>
              <div className="rsvp-form__meal--group">
                <RsvpRadioInput
                  category="MealPreference"
                  labelTextEn="Standardised"
                  labelTextFr="Standardisé"
                  name="standard"
                />
                <RsvpRadioInput
                  category="MealPreference"
                  labelTextEn="halal"
                  labelTextFr="halal"
                  name="halal"
                />
                <RsvpRadioInput
                  category="MealPreference"
                  labelTextEn="Vegan"
                  labelTextFr="végétalien"
                  name="vegan"
                />
              </div>
            </div>
            <button
              id="attendance-btn"
              className="btn btn-primary btn-block"
              type="submit"
              disabled={isLoading}>
              {isLoading
                ? isFrench
                  ? 'soumettant...'
                  : 'Submitting...'
                : isFrench
                ? 'soumettre'
                : 'submit'}
            </button>
            {isAlarming && (
              <Alert alarmText={alarmText} isAlarming={isAlarming} />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
export default RsvpFirstModal;
