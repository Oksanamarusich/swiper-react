import { useSwiper } from 'swiper/react';
import { ContainerButtonSwiper, StyledButton } from './SwiperNavButtons.styled';

export const SwiperNavButtons = () => {
    const swiper = useSwiper();

    return (<ContainerButtonSwiper>
        <StyledButton type="button" onClick={()=> swiper.slidePrev()}>R</StyledButton>
        <StyledButton type="button" onClick ={()=>swiper.slideNext()}>L</StyledButton>
    </ContainerButtonSwiper>)
}