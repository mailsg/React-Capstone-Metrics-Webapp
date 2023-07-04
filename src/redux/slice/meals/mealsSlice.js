import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMeals = createAsyncThunk(
  'meals/fetchMeals',
  async (_, thunkAPI) => {
    const URL = 'http://www.themealdb.com/api/json/v1/1/categories.php';
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong..!');
    }
  },
);

const initialState = {
  meals: [],
  isLoading: false,
};

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(fetchMeals.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMeals.fulfilled, (state, action) => {
      state.isLoading = false;
      const data = action.payload.categories;
      state.meals = data;
    });
    builder.addCase(fetchMeals.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default mealsSlice.reducer;
