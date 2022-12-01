import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Event from './Event';
import { selectAllEvents } from './eventsSlice';

const EventsList = () => {
    const events = useSelector(selectAllEvents);

    return (
        <Col className='mt-4'>
            {events.map((event) => {
                return (
                    <div className='d-flex mb-5' key={event.id}>
                        <Event event={event} />
                    </div>
                );
            })}
        </Col>
    );
}

export default EventsList;