import React, { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import BaseService from '../services/BaseService';
import { debounce } from 'lodash';

const NavSearchBar = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const debouncedSearch = useCallback(debounce(search, 400), []);

  const renderClearSearchButton = () => (
    <span className="navbar-search-clear-btn" onClick={() => setQuery('')}>
      <FontAwesomeIcon className="navbar-search-icon" icon={faTimesCircle} />
    </span>
  );

  async function search(searchParam) {
    const results = await BaseService.GET(`price/${searchParam}`);
    setSearchResults(results);
  }

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    searchQuery = searchQuery.trim();
    if (searchQuery) {
      debouncedSearch(searchQuery);
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
