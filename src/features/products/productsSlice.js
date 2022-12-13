import { PRODUCTS } from "../../app/shared/PRODUCTS";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsArray: PRODUCTS
};

const productsSlice = createSlice({
    name: 'products',
    initialState
});

export const productsReducer = productsSlice.reducer;

export const selectAllProducts = (state) => {
    return state.products.productsArray;
}

export const selectProductById = (id) => (state) => {
    return state.products.productsArray.find((product) => product.id === parseInt(id));
}

export const selectFeaturedProduct = (state) => {
    return state.products.productsArray.find((product) => product.featured);
};

// export const selectRandomProduct = () => {
//     return PRODUCTS[Math.floor(PRODUCTS.length * Math.random())];
// }