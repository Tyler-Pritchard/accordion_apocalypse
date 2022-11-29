import { configureStore } from '@reduxjs/toolkit';
import { accordionsReducer } from '../features/accordions/accordionsSlice';

export const store = configureStore({
  reducer: {
    accordion: accordionsReducer,
  },
});
