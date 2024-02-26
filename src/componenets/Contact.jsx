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
    </section>
  );
};
export default Contact;
