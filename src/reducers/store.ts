import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import CryptoJS from 'crypto-js';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './index';

const storeKey = 'aFil2023sToReK22';
const encrypt = createTransform(
  (inboundState) => {
    if (!inboundState) return inboundState;
    const cryptedText = CryptoJS.AES.encrypt(JSON.stringify(inboundState), storeKey);
    return cryptedText.toString();
  },
  (outboundState) => {
    if (!outboundState) return outboundState;
    const bytes = CryptoJS.AES.decrypt(String(outboundState), storeKey);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decrypted);
  }
);

const persistConfig = {
  key: 'root',
  transforms: [encrypt],
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
