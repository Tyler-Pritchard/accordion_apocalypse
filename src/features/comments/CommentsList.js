import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByAccordionId } from './commentsSlice';

const CommentsList = ({accordionId}) => {
    const comments = selectCommentsByAccordionId(accordionId);
    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />
                })}
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