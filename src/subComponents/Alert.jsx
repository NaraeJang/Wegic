import { useWegicContext } from '../App';

const Alert = ({ alarmText, isAlarming }) => {
  const { isFrench } = useWegicContext();
  const { textFR, textEN, alertStatus } = alarmText;

  return (
    <div className={isAlarming ? `alert alert-${alertStatus} show` : `alert`}>
      <p>{isFrench ? textFR : textEN}</p>
    </div>
  );
};
export default Alert;
