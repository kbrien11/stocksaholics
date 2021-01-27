import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimesCircle } from '@fortawesome/react-fontawesome';

const SearchBar = (props) => {
  const renderClearSearchButton = () => (
    <span
      className="navbar-search-clear-btn"
      onClick={() => props.handleSearch('')}
    >
      <FontAwesomeIcon className="navbar-search-icon" icon={faTimesCircle} />
    </span>
  );
  return (
    <div className="navbar-search" ref={props.navSearchBarRef}>
      <FontAwesomeIcon className="navbar-search-icon" icon={faSearch} />
      <input
        type="text"
        className="navbar-input"
        placeholder="Search"
        value={props.query}
        onChange={(e) => props.handleSearch(e.target.value)}
        onFocus={() => props.setIsSearchBarFocused(true)}
      />
      {props.query && renderClearSearchButton()}
    </div>
  );
};

export default SearchBar;
