// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Blog from './blog';
import Car from './car';
import About from './about';
import Navbar from '../components/navbar';


const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/car" element={<Car />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
