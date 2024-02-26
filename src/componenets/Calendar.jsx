import { useState, useEffect } from 'react';
import { useWegicContext } from '../App';
import { TitleNoDivider } from '../subCompoenets';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';

dayjs.extend(calendar);

const Calendar = () => {
  const { dDay, isFrench } = useWegicContext();
  const { monthFR, monthEN, year } = dDay;

  useEffect(() => {
    renderCalendar();
    calculateDday();
  }, []);

  const [targetDay, setTargetDay] = useState(null);
  const [calendarComponent, setCalendarComponent] = useState(null);

  // CALCULATE D-DAY
  function calculateDday() {
    // Get the current date and time
    const currentDate = new Date().getTime();
    const targetDate = new Date(`${year}-10-14`).getTime();

    // Calculate the time remaining in milliseconds
    const timeRemaining = targetDate - currentDate;

    // Calculate the remaining days
    const remainingDays = Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));

    // Update the HTML or user interface element with the remaining days
    setTargetDay(remainingDays);
  }

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
            <li className="sunday">{isFrench ? 'd' : 's'}</li>
            <li>{isFrench ? 'l' : 'm'}</li>
            <li>{isFrench ? 'm' : 't'}</li>
            <li>{isFrench ? 'm' : 'w'}</li>
            <li>{isFrench ? 'j' : 't'}</li>
            <li>{isFrench ? 'v' : 'f'}</li>
            <li>s</li>
          </ul>
          {calendarComponent}
        </div>
        <h6>
          {isFrench ? 'À CINQUE HEURES DU SOIR' : `FIVE O'CLOCK IN THE EVENING`}
        </h6>
        {targetDay != null && isFrench ? (
          <h4 className="d-day">
            Le mariage est dans <span>{targetDay || 0}</span> jours
          </h4>
        ) : targetDay != null ? (
          <h4 className="d-day">
            The Wedding is in <span>{targetDay || 0}</span> days
          </h4>
        ) : null}
      </div>
    </section>
  );
};
export default Calendar;
