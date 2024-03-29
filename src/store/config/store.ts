import { configureStore } from '@reduxjs/toolkit';
import listSlice from '../modules/listSlice';

export const store = configureStore({
  reducer: {
    listSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
