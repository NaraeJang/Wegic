import { useWegicContext } from '../App';

const ModalTitle = ({ textFr, textEn }) => {
  const { isFrench } = useWegicContext();

  return (
    <div className="modal__page-heading">
      <h5 className="modal-title">{isFrench ? textFr : textEn}</h5>
      <div className="icon close-icon">
        <i className="fa-solid fa-x"></i>
      </div>
    </div>
  );
};
export default ModalTitle;
