import { ACCORDIONS } from "../../app/shared/ACCORDIONS";

export const selectAllAccordions = () => {
    return ACCORDIONS;
}

export const selectAccordionById = (id) => {
    return ACCORDIONS.find((accordion) => accordion.id === parseInt(id));
}

export const selectFeaturedAccordion = () => {
    return ACCORDIONS.find((accordion) => accordion.featured);
};

// export const selectRandomAccordion = () => {
//     return ACCORDIONS[Math.floor(ACCORDIONS.length * Math.random())];
// }