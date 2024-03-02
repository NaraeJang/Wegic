import { useState, useContext, createContext } from 'react';
import {
  Header,
  OurStory,
  Gallery,
  Contact,
  Calendar,
  WeddingParty,
  Schedule,
  Registry,
  Appointment,
  LiveWedding,
  Comment,
  PartyLocation,
  Footer,
} from './componenets';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import 'dayjs/locale/en';
import { register } from 'swiper/element/bundle';
register();

const WegicContext = createContext();

function App() {
  const [isFrench, setIsFrench] = useState(false);
  const [isOurStoryModalOpen, setIsOurStoryModalOpen] = useState(false);

  const sheetId = '1RGxbfj-jWJiserExFNDRPaBr1LwrwEo7QB97R-uashg';
  const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
  const sheetName = 'Comment';
  const query = encodeURIComponent('Select *');
  const url = `${base}&sheet=${sheetName}&tq=${query}`;

  const fetchApi =
    'https://script.google.com/macros/s/AKfycbwr59kQ1zli_mL6517kGTTRzJPwB64s-OZEY5lx2MIoCGidbSyfvMmtFFqi_X-gsHQ1/exec';

  const toggleFrench = () => {
    setIsFrench(!isFrench);
  };

  // GET  D-DATE
  const getTargetDate = () => {
    const currentYear = dayjs().get('year');
    const currentDate = dayjs();

    let targetDate = dayjs(`${currentYear}-10-14`);

    if (currentDate.isAfter(targetDate)) {
      targetDate = targetDate.add(1, 'year');
    }

    return targetDate;
  };

  const dDay = {
    year: getTargetDate().format('YYYY'),
    fullYearFR: getTargetDate().locale('fr').format('MMMM DD, YYYY'),
    monthFR: getTargetDate().locale('fr').format('MMMM'),
    theDayFR: getTargetDate().locale('fr').format('dddd'),
    fullYearEN: getTargetDate().locale('en').format('MMMM DD, YYYY'),
    monthEN: getTargetDate().locale('en').format('MMMM'),
    theDayEN: getTargetDate().locale('en').format('dddd'),
  };

  // // Display Alert
  // function displayAlert(textFR, textEN, alertStatus) {
  //   setIsAlarming(true);
  //   setAlarmText({ textFR, textEN, alertStatus });

  //   // remove alert
  //   setTimeout(function () {
  //     setIsAlarming(false);
  //     setAlarmText({ textFR: '', textEN: '', alertStatus: '' });
  //   }, 3000);
  // }

  return (
    <WegicContext.Provider
      value={{
        toggleFrench,
        setIsFrench,
        isFrench,
        dDay,
        setIsOurStoryModalOpen,
        isOurStoryModalOpen,
        fetchApi,
        url,
      }}>
      <Header />
      <OurStory />
      <Gallery />
      <Contact />
      <Calendar />
      <Schedule />
      <WeddingParty />
      <Registry />
      <PartyLocation />
      <Appointment />
      <LiveWedding />
      <Comment />
      <Footer />
    </WegicContext.Provider>
  );
}

export const useWegicContext = () => useContext(WegicContext);

export default App;
