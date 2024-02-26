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
    fullYearFR: getTargetDate().locale('fr').format('MMMM DD, YYYY'),
    monthFR: getTargetDate().locale('fr').format('MMMM'),
    theDayFR: getTargetDate().locale('fr').format('dddd'),
    fullYearEN: getTargetDate().locale('en').format('MMMM DD, YYYY'),
    monthEN: getTargetDate().locale('en').format('MMMM'),
    theDayEN: getTargetDate().locale('en').format('dddd'),
  };

  return (
    <WegicContext.Provider
      value={{
        toggleFrench,
        setIsFrench,
        isFrench,
        dDay,
        setIsOurStoryModalOpen,
        isOurStoryModalOpen,
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
    </WegicContext.Provider>
  );
}

export const useWegicContext = () => useContext(WegicContext);

export default App;
