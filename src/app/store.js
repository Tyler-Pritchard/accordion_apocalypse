import { configureStore } from '@reduxjs/toolkit';
import { accordionsReducer } from '../features/accordions/accordionsSlice';
import { eventsReducer } from '../features/events/eventsSlice';
import { instructorsReducer } from '../features/instructors/instructorsSlice';
import { commentsReducer } from '../features/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    accordions: accordionsReducer,
    instructors: instructorsReducer,
    events: eventsReducer,
    comments: commentsReducer
  },
});
