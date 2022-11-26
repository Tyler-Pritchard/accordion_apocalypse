import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import {selectFeaturedInstructor} from '../instructors/instructorsSlice';
import {selectFeaturedAccordion} from '../accordions/accordionsSlice';
import { selectFeaturedEvent } from '../events/eventsSlice';

const DisplayList = () => {

    const items = [selectFeaturedAccordion(), selectFeaturedInstructor(), selectFeaturedEvent()];


    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    <Col md className='m-1' key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
}

export default DisplayList;