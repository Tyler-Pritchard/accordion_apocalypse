import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

const AccordionCard = ({accordion}) => {
    const { image, name } = accordion;
    return(
        <Card>
            <CardImg
                width='100%'
                src={image}
                alt={name}
            />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

export default AccordionCard;