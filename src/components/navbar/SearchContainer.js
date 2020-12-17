import React, { useCallback, useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import SearchBar from './SearchBar';
import SearchMenu from './SearchMenu';
import FinancialModelingService from '../../services/FinancialModelingService';

const SearchContainer = () => {
  const [query, setQuery] = useState('');
  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);
  const [isSearchMenuFocused, setIsSearchMenuFocused] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const debouncedSearch = useCallback(debounce(search, 400), []);

  const navSearchBarRef = useRef(null);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    searchQuery = searchQuery.trim();
    debouncedSearch(searchQuery);
  };

  async function search(searchParam) {
    if (searchParam) {
      const results = await FinancialModelingService.search(searchParam);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }

  const handleClick = (e) => {
    if (
      navSearchBarRef &&
      navSearchBarRef.current &&
      navSearchBarRef.current.contains(e.target)
    ) {
      // inside click
      return;
    }

    // outside click logic
    setIsSearchBarFocused(false);
    setIsSearchMenuFocused(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);

    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div
      ref={navSearchBarRef}
      className={`navbar-search-container ${
        isSearchBarFocused || isSearchMenuFocused ? 'isFocused' : ''
      } ${searchResults && searchResults.length > 0 ? 'showMenu' : ''}`}
    >
      <SearchBar
        navSearchBarRef={navSearchBarRef}
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
        setIsSearchBarFocused={setIsSearchBarFocused}
      />
      {(isSearchBarFocused || isSearchMenuFocused) &&
        searchResults &&
        searchResults.length > 0 && (
          <SearchMenu
            navSearchBarRef={navSearchBarRef}
            stocks={searchResults}
            isSearchMenuFocused={isSearchMenuFocused}
            setIsSearchMenuFocused={setIsSearchMenuFocused}
          />
        )}
    </div>
  );
};

export default SearchContainer;
