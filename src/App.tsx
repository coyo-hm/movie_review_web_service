import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import SITE_URL from './constants/site_url';

const MainLayout = loadable(() => import('./layouts/MainLayout'));
const MainPage = loadable(() => import('./pages/MainPage'));
const SearchPage = loadable(() => import('./pages/SearchPage'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route element={<MainPage />} path={'*'} />
            <Route element={<SearchPage />} path={SITE_URL.SEARCH} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
