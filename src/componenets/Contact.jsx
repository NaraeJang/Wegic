import { TitleNoDivider } from '../subCompoenets';

const Contact = () => {
  return (
    <section id="contact" className="container">
      <TitleNoDivider
        titleEn="CONTACT GROOM & BRIDE"
        titleFr="CONTACTER LES MARIÉS"
      />
      <div className="contact__content">
        <h4>Iaroslav</h4>
        <a href="tel:+11234567890">
          <i className="fa-solid fa-phone"></i>
        </a>
        <a href="mailto:peter@wegic.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
      <div className="contact__content">
        <h4>Sumin</h4>
        <a href="tel:+11234567890">
          <i className="fa-solid fa-phone"></i>
        </a>
        <a href="mailto:Sarah@wegic.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </section>
  );
};
export default Contact;
