import { useWegicContext } from '../App';
import divider from '../assets/images/divider/divider.png';

const Title = ({ titleFr, titleEn }) => {
  const { isFrench } = useWegicContext();

  return (
    <div>
      <div className="section-divider">
        <img
          className="section-divider__img"
          src={divider}
          alt="section divider image"
        />
        <h3>{isFrench ? titleFr : titleEn}</h3>
      </div>
    </div>
  );
};
export default Title;
