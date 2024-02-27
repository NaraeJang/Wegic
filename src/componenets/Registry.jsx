import { Title } from '../subCompoenets';
import { useWegicContext } from '../App';

const Registry = () => {
  const { isFrench } = useWegicContext();

  return (
    <section id="gift-registry" className="container gift-registry">
      <Title titleFr="REGISTRE DES CADEAUX" titleEn="GIFT REGISTRY" />

      <div className="gift-registry__content">
        <p>
          {isFrench
            ? ' Votre amitié et votre compagnie le jour de notre mariage est le plus beau des cadeaux. Cependant, si vous choisissez de nous honorer avec un cadeau, nous nous sommes inscrits dans les magasins suivants:'
            : 'Your friendship and company on our wedding day is the greatest gift. However, If you choose to honor us with a gift, we have registered at the following stores:'}
        </p>
        <a
          className="btn btn-primary"
          href="https://www.amazon.ca/s?k=amazon+gift+registry&hvadid=267174764134&hvdev=c&hvlocphy=9000429&hvnetw=g&hvqmt=e&hvrand=10185973085360609107&hvtargid=kwd-298153570026&hydadcr=24616_10318627&tag=googcana-20&ref=pd_sl_36tv8ra2tk_e"
          target="_blank">
          {isFrench ? 'Aller au registre Amazon' : 'Go to the Amazon Registry'}
        </a>
        <a
          className="btn btn-primary"
          href="https://www.honeyfund.com/"
          target="_blank">
          {isFrench ? 'Aller à Honeyfund' : 'Go to the Honeyfund'}
        </a>
      </div>
    </section>
  );
};
export default Registry;
