import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const DisplayCard = ({item}) => {
    const { image, title, description } = item;
    return (
        <Card>
            <CardImg src={image} alt={title} />
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    );
};

export default DisplayCard;