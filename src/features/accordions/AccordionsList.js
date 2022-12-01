import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import AccordionCard from './AccordionCard';
import { selectAllAccordions } from './accordionsSlice';

const AccordionsList = () => {
    const accordions = useSelector(selectAllAccordions);
    console.log('accordions:', accordions);

    return (
        <Row className='ms-auto'>
            {accordions.map((accordion) => {
                return (
                    <Col 
                        md='5' 
                        className='m-4' 
                        key={accordion.id}
                    >
                        <AccordionCard accordion={accordion} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default AccordionsList;