
import { CardWrapper } from "./Card.styled"

export const Card = ({picture}) => {
    return (<div>
        <CardWrapper>
            <img src={picture} />
            </CardWrapper>
        <p></p>
    </div>)
}