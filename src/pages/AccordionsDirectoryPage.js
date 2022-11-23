import { useState } from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import AccordionsList from '../features/accordions/AccordionsList';
import AccordionDetail from '../features/accordions/AccordionDetail';
import { selectRandomAccordion } from '../features/accordions/accordionsSlice';

const AccordionsDirectoryPage = () => {
    const [selectedAccordion, toggleAccordion] = useState(selectRandomAccordion());

    return (
        <Container>
            <Button onClick={() => toggleAccordion(selectRandomAccordion())}>Select Random Accordion</Button>
            <Row>
                <Col sm='5' md='7'>
                    <AccordionsList />
                </Col>
                <Col sm='7' md='5'>
                    <AccordionDetail accordion={selectedAccordion} />
                </Col>
            </Row>
        </Container>
    )
}

export default AccordionsDirectoryPage;