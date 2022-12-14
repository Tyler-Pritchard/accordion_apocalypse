import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const ProductDetail = ({product}) => {
    const { image, title, description } = product;

    return (
        <Col md='5' classtitle='m-1'>
            <Card>
                <CardImg top src={image} alt={title} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ProductDetail;