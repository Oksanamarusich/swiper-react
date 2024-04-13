
import { CardWrapper, WrapperSlide } from "./Card.styled"

export const Card = ({picture}) => {
    return (<WrapperSlide>
        <CardWrapper>
            <img src={picture} alt="acessories"/>
        </CardWrapper>
        
        <p>Eco bag</p>
    </WrapperSlide>)
}