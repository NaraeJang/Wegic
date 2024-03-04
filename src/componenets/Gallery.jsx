import { GalleryImages, TitleNoDivider } from '../subComponents';

const Gallery = () => {
  return (
    <section id="gallery" className="container">
      <TitleNoDivider titleEn="Gallery" titleFr="GALERIE" />
      <GalleryImages />
    </section>
  );
};
export default Gallery;
