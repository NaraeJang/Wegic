import { useWegicContext } from '../App';
import ModalTitle from './ModalTitle';

const PopupOurStory = () => {
  const { isFrench, isOurStoryModalOpen, setIsOurStoryModalOpen } =
    useWegicContext();

  return (
    <div
      className={
        isOurStoryModalOpen
          ? 'modal__bg show our-story-modal'
          : 'modal__bg our-story-modal'
      }>
      <div className="modal__page">
        <ModalTitle
          textEn="Our Story"
          textFr="NOTRE HISTOIRE"
          onClick={() => {
            setIsOurStoryModalOpen(false);
          }}
        />
        <div className="modal__page-content">
          {isFrench ? (
            <p>
              Sumin et Iaroslav se sont rencontrés alors qu'ils sortaient avec
              leurs groupes d'amis dans un bar à Montréal. Après s'être croisés
              dans la pièce et avoir passé le reste de la nuit à découvrir ce
              qu'ils avaient en commun, ils ont commencé à se fréquenter. Deux
              ans plus tard, nous sommes meilleurs amis, vrais amours et
              partenaires durs à cuire dans la vie. Nous sommes enfin prêts à
              l'officialiser !
            </p>
          ) : (
            <p>
              Sumin and Iaroslav met while both out with their groups of friends
              at a bar in Montreal. After catching each other&apos;s eye across
              the room and spending the rest of the night finding out how much
              they have in common, they started dating. Two years later, we're
              best friends, true loves, and badass partners in life. We're
              finally ready to make it official!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default PopupOurStory;
