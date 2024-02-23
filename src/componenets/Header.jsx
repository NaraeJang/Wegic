import heroImage from '../assets/images/hero/hero-cover.png';
import { useWegicContext } from '../App';

const Header = () => {
  const { toggleFrench, isFrench, dDay } = useWegicContext();
  const { fullYearFR, theDayFR, fullYearEN, theDayEN } = dDay;

  return (
    <>
      <header className="header">
        <div className="container">
          <button
            type="button"
            className="header__language"
            onClick={toggleFrench}>
            <span>{isFrench ? 'EN' : 'FR'}</span>
          </button>
          <div className="header__text-container">
            <h1 className="header__title">
              Iaroslav
              <br />
              <span>{isFrench ? 'et' : 'and'}</span>
              <br />
              Sumin
            </h1>
            <p className="header__content">
              {isFrench
                ? 'Nous vous invitons à partager notre joie de célébrer notre mariage'
                : 'We invite you to share our joy to celebrate our marriage'}
            </p>
          </div>
        </div>
      </header>

      <section id="banner">
        <div className="container">
          <img className="img" src={heroImage} alt="hero photo" />

          <div className="banner__content">
            <h4 className="banner__content-month">
              {isFrench ? fullYearFR : fullYearEN}
            </h4>
            <h4 className="banner__content-detail-date">
              <span className="wedding-day">
                {isFrench ? theDayFR : theDayEN}{' '}
              </span>
              | {isFrench ? '17:00' : '05:00 pm'}
            </h4>
            <h3 className="banner__content--location">
              Le Club Forest & Stream
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};
export default Header;
