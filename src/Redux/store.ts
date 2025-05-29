/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { cabinsApi } from './api/cabinsApi';
import { cabinReducers } from './slices/cabinSlice';

const store = configureStore({
  reducer: {
    cabin: cabinReducers,
    [cabinsApi.reducerPath]: cabinsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cabinsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
