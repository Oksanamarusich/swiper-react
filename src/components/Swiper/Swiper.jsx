import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


import { Card } from 'components/Card/Card';

export const SwiperExample = ({pictures}) => {
    return (
        <Swiper
            modules={[Navigation]}
      spaceBetween={24}
            slidesPerView={4}
            navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
        >
            {pictures.map((picture)=>(
                <SwiperSlide><Card key={picture} picture={picture} /></SwiperSlide>
      
                ))}
    
    </Swiper>
    )
}