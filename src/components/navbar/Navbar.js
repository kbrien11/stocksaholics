import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from './SearchContainer';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-section-one">
        <h2 className="logo">
          <Link to="/home">
            <span className="text-primary"> Stocks</span>Aholics
          </Link>
        </h2>
        <SearchContainer />
      </div>
      <nav className="navbar-links">
        <ul>
          <Link to="/stocks">
            <li>Stocks</li>
          </Link>
          <Link to="/crypto">
            <li>Crypto</li>
          </Link>

          <Link to="/cash">
            <li>Cash</li>
          </Link>
          <Link to="/history">
            <li>History</li>
          </Link>
          <Link to="/">
            <li>Logout</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
