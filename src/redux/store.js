import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import comicsSlice from './comics/comicsSlice';
import comicsDetailsSlice from './comicsDetails/comicsDetailsSlice';

const store = configureStore({
  reducer: {
    comics: comicsSlice,
    comicsDetails: comicsDetailsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
