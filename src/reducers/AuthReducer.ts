import { createSlice } from '@reduxjs/toolkit';

const initialState: { authInfo: null; isLogin: boolean } = { authInfo: null, isLogin: false };

const AuthSlice = createSlice({
  name: 'AUTH',
  initialState,
  reducers: { clearAuth: () => initialState },
  // extraReducers: (builder) => {},
});

export const { clearAuth } = AuthSlice.actions;

export const AuthReducer = {
  auth: AuthSlice.reducer,
};
