import { useWegicContext } from '../App';

const ModalTitle = ({ textFr, textEn, onClick }) => {
  const { isFrench } = useWegicContext();

  return (
    <div className="modal__page-heading">
      <h5 className="modal-title">{isFrench ? textFr : textEn}</h5>
      <button type="button" className="icon close-icon" onClick={onClick}>
        <i className="fa-solid fa-x"></i>
      </button>
    </div>
  );
};
export default ModalTitle;
