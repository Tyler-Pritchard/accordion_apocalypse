import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    const { _id, image, title } = product;
    return(
        <Link to={`${_id}`}>
            <Card>
                <CardImg
                    width='100%'
                    src={image}
                    alt={title}
                />
                <CardImgOverlay>
                    <CardTitle>{title}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    )
}

export default ProductCard;