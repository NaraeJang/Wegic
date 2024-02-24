import { useWegicContext } from '../App';
import divider from '../assets/images/divider/divider.png';

const Title = ({ titleFr, titleEn }) => {
  const { isFrench } = useWegicContext();

  return (
    <div>
      <div class="section-divider">
        <img
          class="section-divider__img"
          src={divider}
          alt="section divider image"
        />
        <h3>{isFrench ? titleFr : titleEn}</h3>
      </div>
    </div>
  );
};
export default Title;
