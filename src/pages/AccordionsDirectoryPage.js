import { useState } from 'react'
import { Container, Row, Col } from 'reactstrap';
import AccordionsList from '../features/accordions/AccordionsList';
import AccordionDetail from '../features/accordions/AccordionDetail';
import { selectAccordionById } from '../features/accordions/accordionsSlice';

const AccordionsDirectoryPage = () => {
    const [accordionId, setAccordionId] = useState(0);
    const selectedAccordion = selectAccordionById(accordionId);

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <AccordionsList setAccordionId={setAccordionId} />
                </Col>
                <Col sm='7' md='5'>
                    <AccordionDetail accordion={selectedAccordion} />
                </Col>
            </Row>
        </Container>
    )
}

export default AccordionsDirectoryPage;