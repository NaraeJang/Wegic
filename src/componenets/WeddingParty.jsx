import { TitleNoDivider } from '../subCompoenets';
import { weddingPartyImage } from '../context/weddingPartyImages';
import { useWegicContext } from '../App';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const WeddingParty = () => {
  const { women, men } = weddingPartyImage;
  const { isFrench } = useWegicContext();

  return (
    <section id="wedding-party" className="wedding-party container">
      <TitleNoDivider
        titleEn="WEDDING PARTY"
        titleFr="LES MEMBRES DU MARRIAGE"
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper3">
        <SwiperSlide>
          <div className="wedding-party__profiles">
            {women.map((person, index) => {
              const { path, name, titleEn, titleFr } = person;

              return (
                <div
                  className="wedding-party__profiles--detail"
                  key={index + name}>
                  <img src={path} alt={`${name} photo`} />
                  <h4>{name}</h4>
                  <h5
                    dangerouslySetInnerHTML={{
                      __html: isFrench ? titleFr : titleEn,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wedding-party__profiles">
            {men.map((person, index) => {
              const { path, name, titleEn, titleFr } = person;

              return (
                <div
                  className="wedding-party__profiles--detail"
                  key={index + name}>
                  <img src={path} alt={`${name} photo`} />
                  <h4>{name}</h4>
                  <h5
                    dangerouslySetInnerHTML={{
                      __html: isFrench ? titleFr : titleEn,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default WeddingParty;
