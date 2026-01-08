import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Price from './pages/price';
import Portfolio from './pages/portfolio';
import About from './pages/about';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price" element={<Price />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
