import { useWegicContext } from '../App';
import { useRsvpContext } from '../componenets/Appointment';

const RsvpSecondModal = () => {
  const { isFrench } = useWegicContext();
  const { setIsSecondModalOpen } = useRsvpContext();

  return (
    <div className="rsvp__popup--second">
      <div className="rsvp--second">
        <div className="rsvp--second__heading">
          <span></span>
          <div
            className="icon close-icon"
            onClick={() => {
              setIsSecondModalOpen(false);
            }}>
            <i className="fa-solid fa-x"></i>
          </div>
        </div>
        <div className="rsvp--second__content">
          <h4>
            {isFrench
              ? 'Merci de nous en avoir informé!'
              : 'Thank you for letting us know!'}
          </h4>
          <p>
            {isFrench
              ? 'Nous sommes ravis de vous voir.'
              : 'We are excited to see you.'}
          </p>
          <button
            id="rsvp--third-btn"
            className="btn btn-primary"
            type="button"
            onClick={() => {
              setIsSecondModalOpen(false);
            }}>
            {isFrench ? `Revenir à l’invitation` : 'Go Back to the Invitation'}
          </button>
        </div>
      </div>
    </div>
  );
};
export default RsvpSecondModal;
