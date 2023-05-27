import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
const MainPage = loadable(() => import('./pages/MainPage'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />} path={'*'} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
