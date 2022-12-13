import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByProductId } from './commentsSlice';
import CommentForm from './CommentForm';

const CommentsList = ({productId}) => {
    
    const comments = useSelector(selectCommentsByProductId(productId));

    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />
                })}
            <CommentForm productId={productId} />
            </Col>
        );
    };
    return (
        <Col md='5' className='m-1'>
            There are no comments for this item yet.
        </Col>
    );
};

export default CommentsList;