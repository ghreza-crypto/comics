/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  details: [],
  genreId: 0,
  isLoading: false,
  errorMessage: '',
};

const URL = 'https://api.jikan.moe/v4/anime?genres=';

export const getGenreDetails = createAsyncThunk('genreDetails/getGenreDetails', async (genreId) => {
  try {
    const response = await axios.get(URL + genreId);
    return response.data;
  } catch (error) {
    return error;
  }
});

const comicsDetailsSlice = createSlice({
  name: 'comicsDetails',
  initialState,
  reducers: {
    setGenreId: (state, action) => {
      state.genreId = action.payload;
    },
    clearSlice: (state) => {
      state.details = [];
      state.isLoading = false;
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGenreDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGenreDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        const { data } = action.payload;
        state.details = data;
      })
      .addCase(getGenreDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const { setGenreId, clearSlice } = comicsDetailsSlice.actions;
export default comicsDetailsSlice.reducer;
