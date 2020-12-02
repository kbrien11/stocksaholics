import React from 'react';
import { Link } from 'react-router-dom';

const LandingPageNavbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-logo">
        <span className="text-primary"> Stocks</span>Aholics
      </h1>
      <nav>
        <ul>
          <Link to="/signup" className="navbar-link">
            <li>Sign Up</li>
          </Link>
          <Link to="/login" className="navbar-link">
            <li>Login</li>
          </Link>
          <Link to="/about" className="navbar-link">
            <li>About</li>
          </Link>
          <Link to="/contact" className="navbar-link">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
export default LandingPageNavbar;
