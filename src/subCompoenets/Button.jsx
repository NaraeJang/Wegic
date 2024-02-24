import { useWegicContext } from '../App';

const Button = ({ textFr, textEn, onClick }) => {
  const { isFrench } = useWegicContext();

  return (
    <button className="btn btn-primary" type="button" onClick={onClick}>
      {isFrench ? textFr : textEn}
    </button>
  );
};
export default Button;
