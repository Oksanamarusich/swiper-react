import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,  A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import { Card } from 'components/Card/Card';
// import { SwiperNavButtons } from 'components/SwiperNavButtons/SwiperNavButtons';
import { StyledS } from './SwiperExampleS.styled';

export const SwiperExampleS = ({ pictures }) => {
  return (
    <StyledS>
      <h1>Categories</h1>
      <Swiper
        modules={[Navigation,  A11y]}
        spaceBetween={24}
        slidesPerView={4}
              navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl:'.swiper-button-prev',
                  
              }}
              breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        {/* <SwiperNavButtons /> */}

        {pictures.map(picture => (
          <SwiperSlide key={picture}>
            <Card picture={picture} />
          </SwiperSlide>
        ))}
          </Swiper>
          <div className="button-swiper">
              <button className="swiper-button-next"><FaArrowRight color="black" /></button>
              <button className="swiper-button-prev"><FaArrowLeft color="black"/></button>

          </div>
    </StyledS>
  );
};
