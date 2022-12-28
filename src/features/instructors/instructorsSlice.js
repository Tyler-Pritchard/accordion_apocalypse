import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { INSTRUCTORS } from '../../app/shared/test_data/INSTRUCTORS';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

const initialState = {
    instructorsArray: [],
    isLoading: true,
    errMsg: ''
};

export const fetchInstructors = createAsyncThunk(
    'instructors/fetchInstructors',
    async () => {
        const response = await fetch(baseUrl + 'instructors');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const instructorsSlice = createSlice({
    name: 'instructors',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchInstructors.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchInstructors.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.instructorsArray = mapImageURL(action.payload);
        },
        [fetchInstructors.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message: 'Fetch failed';
        }
    }
});

export const instructorsReducer = instructorsSlice.reducer;

export const selectFeaturedInstructor = (state) => {
    return state.instructors.instructorsArray.find((instructor) => instructor.featured);
};