import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import { galleryImages, galleryThumbs } from '../context/galleryImages';

const GalleryImages = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState();

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2">
        {galleryImages.map((image, index) => {
          const { path } = image;
          return (
            <SwiperSlide key={index}>
              <img src={path} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={0}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper">
        {galleryThumbs.map((image, index) => {
          const { path } = image;
          return (
            <SwiperSlide key={index}>
              <img src={path} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default GalleryImages;
