import { useState } from 'react';
import { useWegicContext } from '../App';
import { useRsvpContext } from '../componenets/Appointment';
import ModalTitle from './ModalTitle';
import RsvpRadioInput from './RsvpRadioInput';
import Alert from './Alert';

const RsvpFirstModal = () => {
  const { isFrench } = useWegicContext();
  const { setIsFirstModalOpen, setIsSecondModalOpen } = useRsvpContext();

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    // console.log(Object.fromEntries(formData));
    const fullName = formData.get('rsvpFullName');
    const guestNumber = formData.get('rsvpGuestNumber');
    const guestName = formData.get('rsvpGuestName');
    const meal = formData.get('rsvpMeal');

    if (!fullName || !meal) {
      return commentDeleteAlarm(
        'Nom ou préférence manquants.',
        'Full Name or Meal Preference is missing.',
        'danger'
      );
    }

    const data = {
      FullName: fullName || '',
      GuestNumber: guestNumber || '',
      GuestName: guestName || '',
      MealPreference: meal || 'Standard',
    };

    console.log(data);

    fetch(
      'https://script.google.com/macros/s/AKfycbyZTccbf4A-7k3COx9xyUy-44Vc8K6iMek5L3BWQ9xkJFz_MgmX7iywnkW-L5nnd3YZUw/exec',
      {
        method: 'Post',
        body: data,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setIsFirstModalOpen(false);
        setIsSecondModalOpen(true);
      })
      .catch((err) => {
        commentDeleteAlarm(
          `Quelque chose s'est mal passé, veuillez réessayer plus tard.`,
          'Something went wrong, please try it later.',
          'danger'
        );
        return console.log(err);
      });
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
              <input type="text" id="rsvpFullName" name="rsvpFullName" />
            </div>
            <div className="rsvp-form__guests--number">
              <label htmlFor="rsvpGuestNumber">
                <h4>{isFrench ? `Nombre d’Invités` : 'Number of Guests'}</h4>
              </label>
              <input
                type="number"
                id="rsvpGuestNumber"
                name="rsvpGuestNumber"
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
              <input type="text" id="rsvpGuestName" name="rsvpGuestName" />
            </div>
            <div className="rsvp-form__meal">
              <h4>
                {isFrench ? `Préférence alimentaire*` : `Meal Preference*`}
              </h4>
              <div className="rsvp-form__meal--group">
                <RsvpRadioInput
                  category="rsvpMeal"
                  labelTextEn="Standardised"
                  labelTextFr="Standardisé"
                  name="standard"
                />
                <RsvpRadioInput
                  category="rsvpMeal"
                  labelTextEn="halal"
                  labelTextFr="halal"
                  name="halal"
                />
                <RsvpRadioInput
                  category="rsvpMeal"
                  labelTextEn="Vegan"
                  labelTextFr="végétalien"
                  name="vegan"
                />
              </div>
            </div>
            <button
              id="attendance-btn"
              className="btn btn-primary btn-block"
              type="submit">
              {isFrench ? 'soumettre' : 'submit'}
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
