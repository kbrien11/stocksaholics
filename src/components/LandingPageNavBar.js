import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const NavbarTwo = () => {
  return (
    <div className="navbar-main">
      <h1 className="navbar-logo">
        <span className="text-primary"> Stocks</span>Aholics
      </h1>
      <nav>
        <ul>
          <li>
            {' '}
            <a href="/signup" as={RouterLink}>
              {' '}
              Register{' '}
            </a>
          </li>
          <li>
            {' '}
            <a href="/login" as={RouterLink}>
              {' '}
              Login{' '}
            </a>
          </li>
          <li>
            {' '}
            <a href="/about" as={RouterLink}>
              {' '}
              About{' '}
            </a>
          </li>
          <li>
            {' '}
            <a href="/contact" as={RouterLink}>
              {' '}
              Contact{' '}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavbarTwo;
