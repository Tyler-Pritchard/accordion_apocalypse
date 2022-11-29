import { ACCORDIONS } from "../../app/shared/ACCORDIONS";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accordionsArray: ACCORDIONS
};

const accordionsSlice = createSlice({
    name: 'accordions',
    initialState
});

export const accordionsReducer = accordionsSlice.reducer;

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