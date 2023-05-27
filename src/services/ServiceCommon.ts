import axios from 'axios';

export const theMovieAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});
