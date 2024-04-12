
import { CardWrapper } from "./Card.styled"

export const Card = ({picture}) => {
    return (<div>
        <CardWrapper>
            <img src={picture} alt="acessories"/>
            </CardWrapper>
        <p></p>
    </div>)
}