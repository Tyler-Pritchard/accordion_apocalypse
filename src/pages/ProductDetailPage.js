import { useSelector } from 'react-redux';
import { Row, Container } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectProductById } from '../features/products/productsSlice';
import ProductDetail from '../features/products/ProductDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';
import Loading from '../components/Loading';
import Error from '../components/Error';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const product = useSelector(selectProductById(productId));
    const isLoading = useSelector((state) => state.products.isLoading);
    const errMsg = useSelector((state) => state.products.errMsg);
    let content = null;

    if (isLoading) {
        content = <Loading />;
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />;
    } else content = (
        <>
            <ProductDetail product={product} />
            <CommentsList productId={productId} />
        </>
    )

    return (
        <Container>
            {product && <SubHeader current={product.title} detail={true} />}
            <Row>
                {content}
            </Row>
        </Container>
    );
}

export default ProductDetailPage;