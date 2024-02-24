import ModalTitle from './ModalTitle';

const PopupOurStory = () => {
  return (
    <div className="modal__bg show">
      <div className="modal__page">
        <ModalTitle textEn="Our Story" textFr="NOTRE HISTOIRE" />
        <div className="modal__page-content">
          <p>
            Sumin and Iaroslav met while both out with their groups of friends
            at a bar in Montreal. After catching each other&apos;s eye across
            the room and spending the rest of the night finding out how much
            they have in common, they started dating. Two years later, we're
            best friends, true loves, and badass partners in life. We're finally
            ready to make it official!
          </p>
        </div>
      </div>
    </div>
  );
};
export default PopupOurStory;
