/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { cabinsApi } from './api/cabinsApi';

const store = configureStore({
  reducer: {
    [cabinsApi.reducerPath]: cabinsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cabinsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
