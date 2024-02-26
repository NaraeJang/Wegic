import { useWegicContext } from '../App';
import { TitleNoDivider } from '../subCompoenets';

const Calendar = () => {
  const { dDay } = useWegicContext();
  const { monthFR, monthEN } = dDay;

  return (
    <section id="calendar" className="container">
      <TitleNoDivider titleEn={monthEN} titleFr={monthFR} />
    </section>
  );
};
export default Calendar;
