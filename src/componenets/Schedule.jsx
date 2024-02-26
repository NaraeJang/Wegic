import { useWegicContext } from '../App';
import dividerLeft from '../assets/images/divider/divider2-left.png';
import dividerRight from '../assets/images/divider/divider2-right.png';

const Schedule = () => {
  const { isFrench } = useWegicContext();
  return (
    <section id="schedule">
      <div className="container">
        <div className="schedule__heading">
          <img
            className="schedule__heading__img"
            src={dividerLeft}
            alt="schedule heading image"
          />
          <h3>our wedding day</h3>
          <img
            className="schedule__heading__img"
            src={dividerRight}
            alt="schedule heading image"
          />
        </div>
        <div className="schedule__content">
          <ul>
            {isFrench ? (
              <>
                <li>
                  <span>17:00</span>
                  <span>Cérémonie</span>
                </li>

                <li>
                  <span>17:30</span>
                  <span>Apéro</span>
                </li>

                <li>
                  <span>18:30</span>
                  <span>Première danse</span>
                </li>

                <li>
                  <span>19:00</span>
                  <span>Souper</span>
                </li>

                <li>
                  <span>20:00</span>
                  <span>Discours</span>
                </li>

                <li>
                  <span>21:00</span>
                  <span>Coupe du gateau</span>
                </li>

                <li>
                  <span>22:30</span>
                  <span>Grand envoi</span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <span>5:00</span>
                  <span>ceremony</span>
                </li>

                <li>
                  <span>5:30</span>
                  <span>cocktail hour</span>
                </li>

                <li>
                  <span>6:30</span>
                  <span>first dance</span>
                </li>

                <li>
                  <span>7:00</span>
                  <span>dinner</span>
                </li>

                <li>
                  <span>8:00</span>
                  <span>speeches</span>
                </li>

                <li>
                  <span>9:00</span>
                  <span>cake cutting</span>
                </li>

                <li>
                  <span>10:30</span>
                  <span>grand send off</span>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Schedule;
