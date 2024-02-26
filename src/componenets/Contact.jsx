import { useWegicContext } from '../App';
import { TitleNoDivider } from '../subCompoenets';

const Contact = () => {
  const { isFrench } = useWegicContext();

  return (
    <section id="contact" className="container">
      <TitleNoDivider
        titleEn="CONTACT GROOM & BRIDE"
        titleFr="CONTACTER LES MARIÉS"
      />
      <div class="contact__content">
        <h4>{isFrench ? 'contacter' : 'contact'} Iaroslav</h4>
        <a href="tel:+11234567890">
          <i class="fa-solid fa-phone"></i>
        </a>
        <a href="mailto:peter@wegic.com">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
      <div class="contact__content">
        <h4>{isFrench ? 'contacter' : 'contact'} Sumin</h4>
        <a href="tel:+11234567890">
          <i class="fa-solid fa-phone"></i>
        </a>
        <a href="mailto:Sarah@wegic.com">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
    </section>
  );
};
export default Contact;
