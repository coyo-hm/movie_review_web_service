import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import SITE_URL from './constants/site_url';
import { Provider } from 'react-redux';
import { persistor, store } from './reducers/store';
import { PersistGate } from 'redux-persist/integration/react';
import ModalProvider from './contexts/ModalContext';

const SignUpPage = loadable(() => import('./pages/SignUpPage'));
const MainLayout = loadable(() => import('./layouts/MainLayout'));
const MainPage = loadable(() => import('./pages/MainPage'));
const SearchPage = loadable(() => import('./pages/SearchPage'));

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <ModalProvider>
              <Routes>
                <Route element={<MainLayout />}>
                  <Route element={<SignUpPage />} path={SITE_URL.SIGN_UP} />
                  <Route element={<MainPage />} path={'*'} />
                  <Route element={<SearchPage />} path={SITE_URL.SEARCH} />
                </Route>
              </Routes>
            </ModalProvider>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
