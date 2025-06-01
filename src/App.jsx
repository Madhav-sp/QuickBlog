import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/Blog';
import Notfound from './pages/Notfound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog/:id" element={<Blog />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App