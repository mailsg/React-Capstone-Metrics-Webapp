import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMeals = createAsyncThunk(
  'meals/fetchMeals',
  async (_, thunkAPI) => {
    const URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    try {
      const response = await axios.get(URL);
      return response.data.categories;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong..!');
    }
  },
);

const initialState = {
  meals: [],
  isLoading: false,
  searchQuery: '',
};

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    searchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },

    resetSearchQuery: (state) => {
      state.searchQuery = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMeals.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMeals.fulfilled, (state, action) => {
      state.isLoading = false;
      state.meals = action.payload;
    });
    builder.addCase(fetchMeals.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { searchQuery, resetSearchQuery } = mealsSlice.actions;
export default mealsSlice.reducer;
