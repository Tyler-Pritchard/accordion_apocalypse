import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import Event from './Event';
import { selectAllEvents } from './eventsSlice';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const EventsList = () => {
    const events = useSelector(selectAllEvents);
    const isLoading = useSelector((state) => state.partners.isLoading);
    const errMsg = useSelector((state) => state.partners.errMsg);

    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} />
    ) : (
        <Col className='mt-4'>
            <Row>
            {events.map((event) => {
                return (
                    <div className='d-flex mb-5' key={event.id}>
                        <Event event={event} />
                    </div>
                );
            })}
            </Row>
        </Col>
    
    );
}

export default EventsList;