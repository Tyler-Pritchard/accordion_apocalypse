import { ACCORDIONS } from "../../app/shared/ACCORDIONS";

export const selectAllAccordions = () => {
    return ACCORDIONS;
}

export const selectRandomAccordion = () => {
    return ACCORDIONS[Math.floor(ACCORDIONS.length * Math.random())];
}