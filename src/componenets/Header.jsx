import heroImage from '../assets/images/hero/hero-cover.png';
import { useWegicContext } from '../App';

const Header = () => {
  const { toggleFrench, isFrench } = useWegicContext();

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
          <div className="header__text pt-8">
            <h1 className="heading__primary">
              Peter
              <br />
              <span>and</span>
              <br />
              Sarah
            </h1>
            <p className="content">
              We invite you to share our joy to celebrate our marriage
            </p>
          </div>
        </div>
      </header>

      <section>
        <img className="banner__img" src={heroImage} alt="hero photo" />

        <div className="container banner__content">
          <h4 className="banner__content--month">
            October, <span className="wedding-year"></span>
          </h4>
          <h4 className="banner__content--detail-date">
            <span className="wedding-day"></span> | 14 | 05:00 pm
          </h4>
          <h3 className="banner__content--location">Le Club Forest & Stream</h3>
        </div>
      </section>
    </>
  );
};
export default Header;
