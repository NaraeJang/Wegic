import { useWegicContext } from '../App';

const Alert = () => {
  const { isFrench, isAlarming, alarmText } = useWegicContext();
  const { textFR, textEN, alertStatus } = alarmText;

  return (
    <div className={isAlarming ? `alert alert-${alertStatus} show` : `alert`}>
      <p>{isFrench ? textFR : textEN}</p>
    </div>
  );
};
export default Alert;
