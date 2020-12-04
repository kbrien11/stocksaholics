import React from 'react';
import { Link } from 'react-router-dom';
import NavSearchBar from './NavSearchBar';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <h2 className="logo">
          <Link to="/home">
            <span className="text-primary"> Stocks</span>Aholics
          </Link>
        </h2>
        <NavSearchBar />
      </div>
      <nav>
        <ul>
          <Link to="/stocks">
            <li>Stocks</li>
          </Link>
          <Link to="/crypto">
            <li>Crypto</li>
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
