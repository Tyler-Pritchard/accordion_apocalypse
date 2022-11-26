import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
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
                        <AnimatedDisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
}

export default DisplayList;