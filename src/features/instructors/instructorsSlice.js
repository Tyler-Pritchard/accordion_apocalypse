import { INSTRUCTORS } from '../../app/shared/INSTRUCTORS';

export const selectFeaturedInstructor = () => {
    return INSTRUCTORS.find((instructor) => instructor.featured);
};