import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@material-ui/core';
import { FavoriteBorderOutlined, ShoppingCartOutlined } from '@material-ui/icons';

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
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Card>
        </Link>
    )
}

export default ProductCard;