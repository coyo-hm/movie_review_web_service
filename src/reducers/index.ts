import { AuthReducer } from './AuthReducer';
import { combineReducers } from '@reduxjs/toolkit';

const { auth } = AuthReducer;

export const rootReducer = combineReducers({ auth });
