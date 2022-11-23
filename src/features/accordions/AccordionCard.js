import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

const AccordionCard = (props) => {
    return(
        <Card>
            <CardImg
                width='100%'
                src={props.accordion.image}
                alt={props.accordion.name}
            />
            <CardImgOverlay>
                <CardTitle>{props.accordion.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

export default AccordionCard;