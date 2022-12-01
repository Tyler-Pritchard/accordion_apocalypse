import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import {selectFeaturedInstructor} from '../instructors/instructorsSlice';
import {selectFeaturedAccordion} from '../accordions/accordionsSlice';
import { selectFeaturedEvent } from '../events/eventsSlice';

const DisplayList = () => {

    const items = useSelector((state) => [selectFeaturedAccordion(state), selectFeaturedInstructor(state), selectFeaturedEvent(state)]);

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    item && (
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item={item} />
                        </Col>
                    )
                );
            })}
        </Row>
    );
}

export default DisplayList;