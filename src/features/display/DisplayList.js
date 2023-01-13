import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import {selectFeaturedInstructor} from '../instructors/instructorsSlice';
import {selectFeaturedProduct} from '../products/productsSlice';
import { selectFeaturedEvent } from '../events/eventsSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const DisplayList = () => {

    const items = useSelector((state) => [selectFeaturedProduct(state), selectFeaturedInstructor(state), selectFeaturedEvent(state)]);

    return (
        <Row>
            {items.map((item, idx) => {
                const {featuredItem, isLoading, errMsg} = item;
                if (isLoading) {
                    return <Loading key={idx} />;
                }
                if (errMsg) {
                    return <Error errMsg={errMsg} key={idx} />;
                }
                return (
                    featuredItem && (
                        <Col md className='m-1' key={idx}>
                            <AnimatedDisplayCard item={featuredItem} />
                        </Col>
                    )
                );
            })}
        </Row>
    );
}

export default DisplayList;