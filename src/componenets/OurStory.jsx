import { Button, PopupOurStory, Title } from '../subCompoenets';
import { useWegicContext } from '../App';

const OurStory = () => {
  const { isFrench } = useWegicContext();

  const onClick = () => {
    console.log('it is working');
  };
  return (
    <>
      <PopupOurStory />
      <section id="OurStory" className="container pw-small">
        <Title titleFr="NOTRE HISTOIRE" titleEn="Our Story" />
        {isFrench ? (
          <p>
            Le couple qui allait bientôt se marier venait des côtés opposés du
            monde. Ils se sont rencontrés par le destin dans une ville et sont
            instantanément tombés amoureux. Ils ont voyagé dans tant d'endroits
            dans le monde et leur amour l'un pour l'autre s'est approfondi.
            Après avoir vécu ensemble pendant des années, ils ont décidé de
            s'engager et d'officialiser leur union pour rester ensemble toute
            leur vie.
          </p>
        ) : (
          <p>
            The soon to be married couple came from opposite sides of the world.
            They met each other by fate in a city and instantly fell in love.
            They travelled to so many places in the world and their love for
            each other depened. After living together for years, they decided to
            commit and to officialize their union to remain together for the
            rest of their lives.
          </p>
        )}
        <Button textFr="Lire la suite" textEn="Read More" onClick={onClick} />
      </section>
    </>
  );
};
export default OurStory;
