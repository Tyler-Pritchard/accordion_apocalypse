import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import {selectFeaturedInstructor} from '../instructors/instructorsSlice';
import {selectFeaturedAccordion} from '../accordions/accordionsSlice';

const DisplayList = () => {

    const items = [selectFeaturedAccordion(), selectFeaturedInstructor()];


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