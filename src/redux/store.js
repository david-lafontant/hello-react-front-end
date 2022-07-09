import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from '../feature/greetingSlice';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
