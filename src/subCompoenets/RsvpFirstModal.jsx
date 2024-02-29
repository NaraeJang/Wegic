import { useWegicContext } from '../App';
import { useRsvpContext } from '../componenets/Appointment';
import ModalTitle from './ModalTitle';
import RsvpRadioInput from './RsvpRadioInput';

const RsvpFirstModal = () => {
  const { isFrench } = useWegicContext();
  const { setIsFirstModalOpen } = useRsvpContext();

  return (
    <div className="rsvp__popup">
      <div className="rsvp__popup__page">
        <ModalTitle
          textFr="Votre Présence"
          textEn="Your Attendance"
          onClick={() => setIsFirstModalOpen(false)}
        />
        <div className="rsvp__popup__page__content">
          <form className="rsvp-form">
            <div className="rsvp-form__name">
              <label htmlFor="rsvpFullName">
                <h4>{isFrench ? 'Nom Complet' : 'Full Name'}</h4>
              </label>
              <input type="text" id="rsvpFullName" required="required" />
            </div>
            <div className="rsvp-form__guests--number">
              <label htmlFor="rsvpGuestNumber">
                <h4>{isFrench ? `Nombre d’Invités` : 'Number of Guests'}</h4>
              </label>
              <input type="number" id="rsvpGuestNumber" required="required" />
            </div>
            <div className="rsvp-form__guests--name">
              <label htmlFor="rsvpGuestName">
                <h4>
                  {isFrench
                    ? ` Noms des Invités additionels`
                    : 'Name of Additional Guests'}
                </h4>
              </label>
              <input type="text" id="rsvpGuestName" />
            </div>
            <div className="rsvp-form__meal">
              <h4>{isFrench ? `Préférence alimentaire` : `Meal Preference`}</h4>
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
            <div className="alert">
              <p></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RsvpFirstModal;
