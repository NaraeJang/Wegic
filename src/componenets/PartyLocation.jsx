import { useWegicContext } from '../App';
import { TitleNoDivider } from '../subCompoenets';

const PartyLocation = () => {
  const { isFrench } = useWegicContext();

  return (
    <section id="party-location" className="container">
      <TitleNoDivider titleEn="LOCATION" titleFr="EMPLACEMENT" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.5231242102545!2d-73.7680555219451!3d45.43911353510958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9161c137a85d3%3A0x728c7ed65d19f9c8!2sLe%20club%20Forest%20%26%20Stream!5e0!3m2!1sen!2sca!4v1709081120046!5m2!1sen!2sca"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="async"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="location__content">
        <div className="location__content--name">
          <h4>le club forest & stream</h4>
          <p>1800 Lakeshore Dr, Dorval, Quebec H9S 2E6</p>
        </div>
        <div className="location__content--parking">
          <h4>{isFrench ? 'STATIONNEMENT' : 'PARKING'}</h4>
          <p>
            {isFrench
              ? 'Le stationnement sera gratuit pour 5 heures'
              : 'Parking will be free for 5 hours'}
          </p>
        </div>
      </div>
    </section>
  );
};
export default PartyLocation;
