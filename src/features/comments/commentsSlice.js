import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectCommentsByAccordionId = (accordionId) => {
    return COMMENTS.filter(
        (comment) => comment.accordionId === parseInt(accordionId)
    );
};