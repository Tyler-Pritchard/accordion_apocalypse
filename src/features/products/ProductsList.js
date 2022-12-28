import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import ProductCard from './ProductCard';
import { selectAllProducts } from './productsSlice';
import Error from '../../components/Error'; 
import Loading from '../../components/Loading';

const ProductsList = () => {
    const products = useSelector(selectAllProducts);
    console.log('products:', products);
    const isLoading = useSelector((state) => state.products.isLoading);
    const errMsg = useSelector((state) => state.products.errMsg);

    return (
        <Row className='ms-auto'>
            {products.map((product) => {
                if (isLoading) {
                    return (
                        <Row>
                            <Loading />
                        </Row>
                    )
                }

                if (errMsg) {
                    return (
                        <Row>
                            <Error errMsg={errMsg} />
                        </Row>
                    )
                }

                return (
                    <Col 
                        md='5' 
                        className='m-4' 
                        key={product.id}
                    >
                        <ProductCard product={product} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default ProductsList;