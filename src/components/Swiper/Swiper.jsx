import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
import 'swiper/css';

import { Card } from 'components/Card/Card';
import { SwiperNavButtons } from 'components/SwiperNavButtons/SwiperNavButtons';
import { StyledSwiper } from './Swiper.styled';

export const SwiperExample = ({ pictures }) => {
  return (
    <StyledSwiper>
      <h1>Categories</h1>
      <Swiper
        // modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={4}

        //    onSlideChange={() => console.log('slide change')}
        //   onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperNavButtons />

        {pictures.map(picture => (
          <SwiperSlide key={picture}>
            <Card picture={picture} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiper>
  );
};
