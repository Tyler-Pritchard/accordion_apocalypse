import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const AccordionDetail = ({accordion}) => {
    const { image, name, description } = accordion;

    return (
        <Col md='5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default AccordionDetail;