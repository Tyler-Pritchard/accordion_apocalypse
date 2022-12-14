// import { PRODUCTS } from "../../app/shared/PRODUCTS";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from "../../utils/mapImageURL";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetch(baseUrl + 'products');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    productsArray: [],
    isLoading: true,
    errMsg: ''
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.productsArray = mapImageURL(action.payload);
        },
        [fetchProducts.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed'
        }
    }
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