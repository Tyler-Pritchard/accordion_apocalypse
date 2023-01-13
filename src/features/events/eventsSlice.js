import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { EVENTS } from '../../app/shared/test_data/EVENTS';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

const initialState = {
    eventsArray: [],
    isLoading: true,
    errMsg: ''
};

export const fetchEvents = createAsyncThunk(
    'events/fetchEvents',
    async () => {
        const response = await fetch(baseUrl + 'events');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json()
        return data;
    }
);

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchEvents.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchEvents.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.eventsArray = mapImageURL(action.payload);
        },
        [fetchEvents.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const eventsReducer = eventsSlice.reducer;

export const selectAllEvents = (state) => {
    return state.events.eventsArray;
};

export const selectFeaturedEvent = (state) => {
    //THIS CODE IS CAUSING FEATURED INSTRUCTOR NOT TO LOAD
    return {
        featuredItem: state.events.eventsArray.find(
            (event) => event.featured
        ),
        isLoading: state.events.isLoading,
        errMsg: state.events.errMsg
    };
    // return state.events.eventsArray.find((event) => event.featured);
};