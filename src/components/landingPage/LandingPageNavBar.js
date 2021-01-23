import React from 'react';
import { Link } from 'react-router-dom';

const LandingPageNavbar = () => {
  return (
    <div className="landing-navbar-container">
      <h2>
        <span className="text-primary"> Stocks</span>Aholics
      </h2>
      <nav>
        <ul>
          <Link to="/signup">
            <li>Sign Up</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
export default LandingPageNavbar;
