import { createSlice } from '@reduxjs/toolkit';
import { EVENTS } from '../../app/shared/test_data/EVENTS';

const initialState = {
    eventsArray: EVENTS
};

const eventsSlice = createSlice({
    name: 'events',
    initialState
});

export const eventsReducer = eventsSlice.reducer;

export const selectAllEvents = (state) => {
    return state.events.eventsArray;
};

export const selectFeaturedEvent = (state) => {
    return state.events.eventsArray.find((event) => event.featured)
};