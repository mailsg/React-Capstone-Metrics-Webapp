import { configureStore } from '@reduxjs/toolkit';
import mealsReducer from './slice/meals/mealsSlice';

const store = configureStore({
  reducer: {
    meals: mealsReducer,
  },
});

export default store;
