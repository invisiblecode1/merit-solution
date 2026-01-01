import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Price from './pages/price';
import Portfolio from './pages/portfolio';
import About from './pages/about';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price" element={<Price />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
