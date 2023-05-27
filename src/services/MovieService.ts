import { theMovieAxios } from './ServiceCommon';

const API_KEY = process.env.REACT_APP_IMDB_API_KEY;
export const getMovies = () => theMovieAxios.get(`/movie/now_playing?api_key=${API_KEY}`);
export const getImage = () => theMovieAxios.get(`/`);
