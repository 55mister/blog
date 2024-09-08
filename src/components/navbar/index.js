import React from 'react';
import { Link } from 'react-router-dom';
import './index.less'; 

const Navbar = () => {
  return (
    <div className="header">
    <Link className='icon' to="/"></Link>
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/car">Car</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
    <div className="todo">TODO</div>
  </div>
  );
};

export default Navbar;

