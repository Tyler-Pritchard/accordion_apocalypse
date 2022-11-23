import { Col, Row } from 'reactstrap';
import {ACCORDIONS} from '../../app/shared/ACCORDIONS';
import AccordionCard from './AccordionCard';

const AccordionsList = () => {
    return (
        <Row className='ms-auto'>
            {ACCORDIONS.map((accordion) => {
                return (
                    <Col md='5' className='m-4' key={accordion.id}>
                        <AccordionCard accordion={accordion} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default AccordionsList;