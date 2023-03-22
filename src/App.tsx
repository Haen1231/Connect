import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { ResultPage } from './pages/ResultPage';
import { SelectPage } from './pages/SelectPage';
import { SubmitPage } from './pages/SubmitPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="selects/:count" element={<SelectPage />} />
        <Route path="selects/22" element={<SubmitPage />} />
        <Route path="result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
