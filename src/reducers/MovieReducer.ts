import { createSlice } from '@reduxjs/toolkit';
import { IMovie } from '../models/movie';
import { getMoviesAsync } from '../services/MovieService';

interface MovieState {
  moviesList: IMovie[];
}

const initialState: MovieState = {
  moviesList: [],
};

const MovieSlice = createSlice({
  name: 'MOVIE',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMoviesAsync.fulfilled, (state, { payload: { data } }) => {
      state.moviesList = data.results;
    });
  },
});

export const MovieReducer = {
  movie: MovieSlice.reducer,
};
