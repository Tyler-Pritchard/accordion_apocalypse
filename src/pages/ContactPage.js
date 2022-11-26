import { Container, Row, Col } from 'reactstrap';
import SubHeader from '../components/SubHeader';

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Contact' />
            <Row className='row-content align-items-center'>
                <Col sm='4'>
                    <h5>Our Address</h5>
                    <address>
                        5480 Elata Ave
                        <br />
                        Yucca Valley, CA 92284
                        <br />
                        U.S.A.
                    </address>
                </Col>
                <Col>
                    <a
                        role='button'
                        className='btn btn-link'
                        href='tel:+14155965952'
                    >
                        <i className='fa fa-phone' />1-415-596-5952
                    </a>
                    <br />
                    <a
                        role="button"
                        className='btn btn-link'
                        href='accordionapocalypse'
                    >
                        <i className='fa fa-envelope-o' /> accordionapocalypse@yahoo.com
                    </a>
                </Col>
            </Row>
            <Row className='row-content'>
                <Col xs='12'>
                    <h2>Send Us Your Feedback</h2>
                </Col>
                <Col md='10'>
                    TBD: ContactForm
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;