import { Container, Row } from 'reactstrap';
import ProductsList from '../features/products/ProductsList';
import SubHeader from '../components/SubHeader';

const ProductsDirectoryPage = () => {

    return (
        <Container>
            <SubHeader current='Direcotry' />
            <Row>
                <ProductsList />
            </Row>
        </Container>
    )
}

export default ProductsDirectoryPage;