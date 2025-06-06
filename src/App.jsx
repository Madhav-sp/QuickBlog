import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/Blog';
import Notfound from './pages/Notfound';
import Layout from './pages/admin/Layout';
import Dashboard from './pages/admin/Dashboard';
import AddBlog from './pages/admin/AddBlog';
import ListBlog from './pages/admin/ListBlog';
import Comments from './pages/admin/Comments';
import Login from './components/admin/Login';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog/:id" element={<Blog />}></Route>
          <Route path="*" element={<Notfound />}></Route>
          <Route path="/admin" element={true?<Layout />: <Login/>}>
            <Route index element={<Dashboard />} />
            <Route path="addblog" element={<AddBlog />} />
            <Route path="listblog" element={<ListBlog />} />
            <Route path="comments" element={<Comments />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App