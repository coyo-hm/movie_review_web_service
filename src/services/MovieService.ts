import { createAsyncThunk } from '@reduxjs/toolkit';
import { theMovieAxios } from '@services/ServiceCommon';
import { IGetMoviesResult } from '@models/movie';

const API_KEY = process.env.REACT_APP_IMDB_API_KEY;
export const getMoviesAsync = createAsyncThunk<{ data: IGetMoviesResult }>(
  'MOVIE/getMoviesAsync',
  () => theMovieAxios.get(`/movie/now_playing?api_key=${API_KEY}`)
);
export const getImage = () => theMovieAxios.get(`/`);
