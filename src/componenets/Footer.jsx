import { useWegicContext } from '../App';
import dayjs from 'dayjs';

const Footer = () => {
  const { isFrench } = useWegicContext();

  function linkCopy() {
    const textToCopy = location.href; // Get the current URL

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log('Successfully copied the link.');
      })
      .catch((error) => {
        console.error('Failed to copy link: ', error);
      });
  }

  return (
    <footer>
      <div className="container">
        <div className="link">
          <button type="button" className="link-copy" onClick={linkCopy}>
            <i className="fa-solid fa-link"></i>
            <span>{isFrench ? 'Copier le lien' : 'Copy the link'}</span>
          </button>
        </div>
        <p>
          &copy; 2023 - {dayjs().get('year')} WEGIC |
          {isFrench ? ' Tous droits réservés.' : ' All right reserved.'}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
