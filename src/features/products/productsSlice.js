// import { PRODUCTS } from "../../app/shared/PRODUCTS";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from "../../utils/mapImageURL";

const initialState = {
    productsArray: [],
    isLoading: true,
    errMsg: ''
};

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

export const selectFeaturedProduct = (state) => {
    //THIS CODE IS CAUSING FEATURED PRODUCTS NOT TO LOAD
    return { 
        featuredProduct: state.products.productsArray.find(
            (product) => product.featured
        ),
        isLoading: state.products.isLoading,
        errMsg: state.products.errMsg
    }
    // return state.products.productsArray.find((product) => product.featured);
};

export const selectAllProducts = (state) => {
    return state.products.productsArray;
}

export const selectProductById = (_id) => (state) => {
    return state.products.productsArray.find((product) => product.id === parseInt(_id));
}

// export const selectRandomProduct = () => {
//     return PRODUCTS[Math.floor(PRODUCTS.length * Math.random())];
// }