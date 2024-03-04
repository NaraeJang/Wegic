import { useWegicContext } from '../App';
import { TitleNoDivider } from '../subComponents';

const LiveWedding = () => {
  const { isFrench, dDay } = useWegicContext();
  const { fullYearEN, fullYearFR, theDayEN, theDayFR } = dDay;
  return (
    <section id="live-wedding" className="container">
      <TitleNoDivider titleEn="LIVE WEDDING" titleFr="MARIAGE EN DIRECT" />
      <div className="live-wedding__content">
        <p>
          {isFrench
            ? 'Partagez la joie à distance en direct!'
            : 'Share the joy even far away via Live Stream'}
        </p>
        <h6>
          {isFrench
            ? `${fullYearFR} | ${theDayFR} | 17:00 (EST)`
            : `${fullYearEN} | ${theDayEN} | 05:00PM(EST)
`}
        </h6>
        <a
          className="btn btn-primary"
          href="https://www.youtube.com/live-wedding"
          target="_blank">
          {isFrench
            ? 'Regarder le mariage en direct'
            : 'Watch The Live Wedding'}
        </a>
      </div>
    </section>
  );
};
export default LiveWedding;
