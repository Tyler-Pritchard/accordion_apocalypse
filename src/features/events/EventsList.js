import { Col } from 'reactstrap';
import Event from './Event';
import { selectAllEvents } from './eventsSlice';

const PartnersList = () => {
    const events = selectAllEvents();

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

export default PartnersList;