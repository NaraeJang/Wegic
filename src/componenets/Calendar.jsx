import { useState, useEffect } from 'react';
import { useWegicContext } from '../App';
import { TitleNoDivider } from '../subCompoenets';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';

dayjs.extend(calendar);

const Calendar = () => {
  const { dDay } = useWegicContext();
  const { monthFR, monthEN, year } = dDay;

  const weddingDDay = document.querySelector('.d-day span');

  useEffect(() => {
    renderCalendar();
  }, []);

  const [calendarComponent, setCalendarComponent] = useState(null);

  // CALCULATE D-DAY

  // GET SUNDAY
  function getSundayDates(year, month) {
    const dates = [];

    // Loop through all the days of the month
    for (let day = 1; day <= 31; day++) {
      const date = new Date(year, month, day);

      if (date.getMonth() === month && date.getDay() === 0) {
        // If the date is in the desired month and it's a Sunday (day 0), add it to the array
        dates.push(date.getDate());
      }
    }

    return dates;
  }

  // RENDER CALENDAR
  const renderCalendar = () => {
    //getting first day of month.
    let firstDayOfMonth = dayjs(`${year}-10-01`).get('day');

    //getting last date of october.
    let lastDateOfThisMonth = dayjs(`${year}-11-01`)
      .subtract(1, 'day')
      .format('DD');
    //getting last date of previous month.
    let lastDateOfLastMonth = dayjs(`${year}-10-01`)
      .subtract(1, 'day')
      .format('DD');
    //getting last day of october.
    let lastDayOfThisMonth = dayjs(`${year}-10-${lastDateOfThisMonth}`).get(
      'day'
    );

    let liTag = [];
    let sundays = '';

    //creating li of previous month last days
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      if (i === 6) {
        break; // Skip the remaining iterations of the loop if i is 6 (Saturday)
      }

      if (getSundayDates(year, 8).includes(lastDateOfLastMonth - i)) {
        sundays = 'inactive sunday';
      } else {
        sundays = 'inactive';
      }

      liTag.push(
        <li key={lastDateOfLastMonth - i} className={`${sundays}`}>
          {lastDateOfLastMonth - i}
        </li>
      );
    }

    //creating li of all days of current month
    for (let i = 1; i <= lastDateOfThisMonth; i++) {
      // find sundays in October
      if (getSundayDates(year, 9).includes(i)) {
        sundays = 'sunday';
      } else {
        sundays = '';
      }

      let dDay = i === new Date(year, 9, 14).getDate() ? 'active' : '';

      liTag.push(
        <li key={i + 'currentMonth'} className={`${dDay} ${sundays}`}>
          {i}
        </li>
      );
    }

    //creating li of days of next month
    for (let i = lastDayOfThisMonth; i < 6; i++) {
      if (i === 6) {
        break; // Skip the remaining iterations of the loop if i is 6 (Saturday)
      }
      liTag.push(
        <li key={i + `nextMonth`} className="inactive">
          {i - lastDayOfThisMonth + 1}
        </li>
      );
    }

    // Update the state with the generated JSX
    setCalendarComponent(<ul className="days">{liTag}</ul>);
  };

  return (
    <section id="calendar">
      <div className="container">
        <TitleNoDivider titleEn={monthEN} titleFr={monthFR} />
        <div className="calendar">
          <ul className="weeks">
            <li className="sunday">s</li>
            <li>m</li>
            <li>t</li>
            <li>w</li>
            <li>t</li>
            <li>f</li>
            <li>s</li>
          </ul>
          {calendarComponent}
        </div>
        <h6> FIVE O'CLOCK IN THE EVENING</h6>
        <h4 className="d-day">
          The wedding is in <span>272</span> days
        </h4>
      </div>
    </section>
  );
};
export default Calendar;
