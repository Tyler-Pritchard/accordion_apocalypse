import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByAccordionId } from './commentsSlice';
import CommentForm from './CommentForm';

const CommentsList = ({accordionId}) => {
    
    const comments = useSelector(selectCommentsByAccordionId(accordionId));

    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />
                })}
            <CommentForm accordionId={accordionId} />
            </Col>
        );
    };
    return (
        <Col md='5' className='m-1'>
            There are no comments for this accordion yet.
        </Col>
    );
};

export default CommentsList;