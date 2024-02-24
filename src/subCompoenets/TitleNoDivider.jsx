import { useWegicContext } from '../App';

const TitleNoDivider = ({ titleFr, titleEn }) => {
  const { isFrench } = useWegicContext();

  return (
    <div>
      <h3 className="section-divider">{isFrench ? titleFr : titleEn}</h3>
    </div>
  );
};
export default TitleNoDivider;
