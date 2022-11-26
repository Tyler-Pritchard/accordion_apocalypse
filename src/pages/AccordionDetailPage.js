import { Row, Container } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectAccordionById } from '../features/accordions/accordionsSlice';
import AccordionDetail from '../features/accordions/AccordionDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';

const AccordionDetailPage = () => {
    const { accordionId } = useParams();
    const accordion = selectAccordionById(accordionId);

    return (
        <Container>
            <SubHeader current={accordion.name} detail={true} />
            <Row>
                <AccordionDetail accordion={accordion} />
                <CommentsList accordionId={accordionId} />
            </Row>
        </Container>
    );
}

export default AccordionDetailPage;