import { Row, Container } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectAccordionById } from '../features/accordions/accordionsSlice';
import AccordionDetail from '../features/accordions/AccordionDetail';

const AccordionDetailPage = () => {
    const { accordionId } = useParams();
    const accordion = selectAccordionById(accordionId);

    return (
        <Container>
            <Row>
                <AccordionDetail accordion={accordion} />
            </Row>
        </Container>
    );
}

export default AccordionDetailPage;