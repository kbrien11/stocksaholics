import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import BaseService from '../services/BaseService';

const NavSearchBar = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const renderClearSearchButton = () => (
    <span className="navbar-search-clear-btn" onClick={() => setQuery('')}>
      <FontAwesomeIcon className="navbar-search-icon" icon={faTimesCircle} />
    </span>
  );

  const handleSearch = (query) => {
    setQuery(query);
    if (query) {
      const searchResults = BaseService.GET(`price/${query}`);
      console.log(searchResults);
    }
  };

  return (
    <div
      className={`navbar-search-container ${isFocused ? 'isFocused' : ''}`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <div className="navbar-search">
        <FontAwesomeIcon className="navbar-search-icon" icon={faSearch} />
        <input
          type="text"
          className="navbar-input"
          placeholder="Search"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
        {query && renderClearSearchButton()}
      </div>
    </div>
  );
};

export default NavSearchBar;
