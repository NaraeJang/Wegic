import { createContext, useContext, useState } from 'react';
import { useWegicContext } from '../App';
import dividerLeft from '../assets/images/divider/divider-left.png';
import dividerRight from '../assets/images/divider/divider-right.png';
import { Button, RsvpFirstModal, RsvpSecondModal } from '../subCompoenets';

const RsvpContext = createContext();

const Appointment = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(true);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  return (
    <RsvpContext.Provider
      value={{
        isFirstModalOpen,
        setIsFirstModalOpen,
        isSecondModalOpen,
        setIsSecondModalOpen,
      }}>
      {isFirstModalOpen && <RsvpFirstModal />}
      {isSecondModalOpen && <RsvpSecondModal />}
      <section id="appointment" className="rsvp">
        <div className="container">
          <div className="rsvp__heading">
            <img
              className="rsvp__heading__img"
              src={dividerLeft}
              alt="rsvp heading image"
            />
            <h3>RSVP</h3>
            <img
              className="rsvp__heading__img"
              src={dividerRight}
              alt="rsvp heading image"
            />
          </div>
          <Button
            textEn="Tesll Us Your Attendance"
            textFr="Dites nous votre présence"
            onClick={() => {
              setIsFirstModalOpen(true);
            }}
          />
        </div>
      </section>
    </RsvpContext.Provider>
  );
};

export const useRsvpContext = () => useContext(RsvpContext);

export default Appointment;
