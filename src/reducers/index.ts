import { combineReducers } from '@reduxjs/toolkit';
import { AuthReducer } from './AuthReducer';
import { MovieReducer } from './MovieReducer';

const { auth } = AuthReducer;
const { movie } = MovieReducer;

export const rootReducer = combineReducers({ auth, movie });
