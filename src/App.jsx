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

const WegicContext = createContext();

function App() {
  const [isFrench, setIsFrench] = useState(false);

  const toggleFrench = () => {
    setIsFrench(!isFrench);
  };

  return (
    <WegicContext.Provider value={{ toggleFrench, setIsFrench, isFrench }}>
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
