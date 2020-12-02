import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="navbar-logo">
        <Link to="/home">
          <span className="text-primary"> Stocks</span>Aholics
        </Link>
      </h2>
      <nav>
        <ul>
          <Link to="/stocks" className="navbar-link">
            <li>Stocks</li>
          </Link>
          <Link to="/crypto" className="navbar-link">
            <li>Crypto</li>
          </Link>
          <Link to="/history" className="navbar-link">
            <li>History</li>
          </Link>
          <Link to="/" className="navbar-link">
            <li>Logout</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
