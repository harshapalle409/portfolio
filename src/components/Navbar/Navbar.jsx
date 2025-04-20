import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">Palle Harsha</Link>
        
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link to="/" className="navbar__link">Home</Link>
          </li>
          <li className="navbar__item">
            <Link to="/about" className="navbar__link">About</Link>
          </li>
          <li className="navbar__item">
            <Link to="/education" className="navbar__link">Education</Link>
          </li>
          <li className="navbar__item">
            <Link to="/projects" className="navbar__link">Projects</Link>
          </li>
          {/* <li className="navbar__item">
            <Link to="/ai-creations" className="navbar__link">AI Creations</Link>
          </li> */}
          <li className="navbar__item">
            <Link to="/contact" className="navbar__link">Contact</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;