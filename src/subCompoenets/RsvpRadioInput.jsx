import { useWegicContext } from '../App';

const RsvpRadioInput = ({ category, labelTextFr, labelTextEn, name }) => {
  const { isFrench } = useWegicContext();

  return (
    <label className="radio-input-label" htmlFor={name}>
      <input type="radio" name={category} id={name} />
      <span>{isFrench ? labelTextFr : labelTextEn}</span>
    </label>
  );
};
export default RsvpRadioInput;
