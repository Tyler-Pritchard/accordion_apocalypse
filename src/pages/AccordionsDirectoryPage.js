import { Container, Row } from 'reactstrap';
import AccordionsList from '../features/accordions/AccordionsList';
import SubHeader from '../components/SubHeader';

const AccordionsDirectoryPage = () => {

    return (
        <Container>
            <SubHeader current='Direcotry' />
            <Row>
                <AccordionsList />
            </Row>
        </Container>
    )
}

export default AccordionsDirectoryPage;