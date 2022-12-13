import { useSelector } from 'react-redux';
import { Row, Container } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectProductById } from '../features/products/productsSlice';
import ProductDetail from '../features/products/ProductDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const product = useSelector(selectProductById(productId));

    return (
        <Container>
            <SubHeader current={product.name} detail={true} />
            <Row>
                <ProductDetail product={product} />
                <CommentsList productId={productId} />
            </Row>
        </Container>
    );
}

export default ProductDetailPage;