import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { productsReducer } from '../features/products/productsSlice';
import { eventsReducer } from '../features/events/eventsSlice';
import { instructorsReducer } from '../features/instructors/instructorsSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { userReducer } from '../features/user/userSlice';



export const store = configureStore({
  reducer: {
    products: productsReducer,
    instructors: instructorsReducer,
    events: eventsReducer,
    comments: commentsReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
