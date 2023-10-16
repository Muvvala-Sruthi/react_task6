import React from 'react';
import { Link } from 'react-router-dom';
// import About from "./About";
import './styles.css';
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/skills" className="nav-link">Skills</Link>
    </div>
  );
};

export default Navbar;
