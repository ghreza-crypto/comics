/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  comics: [],
  isLoading: false,
  errorMessage: '',
};
const URL = 'https://api.jikan.moe/v4/genres/anime';

export const getGenres = createAsyncThunk('animeGenres/getGenres', async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return error;
  }
});
const comicsSlice = createSlice({
  name: 'comics',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGenres.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGenres.fulfilled, (state, action) => {
        state.isLoading = false;
        const { data } = action.payload;
        state.comics = data;
      })
      .addCase(getGenres.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default comicsSlice.reducer;
