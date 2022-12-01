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

export const selectAllAccordions = (state) => {
    return state.accordions.accordionsArray;
}

export const selectAccordionById = (id) => (state) => {
    return state.accordions.accordionsArray.find((accordion) => accordion.id === parseInt(id));
}

export const selectFeaturedAccordion = (state) => {
    return state.accordions.accordionsArray.find((accordion) => accordion.featured);
};

// export const selectRandomAccordion = () => {
//     return ACCORDIONS[Math.floor(ACCORDIONS.length * Math.random())];
// }