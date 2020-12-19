import React from 'react';
import { Link } from 'react-router-dom';

const SearchMenu = (props) => {
  return (
    <div className="search-menu isFocused" ref={props.navSearchBarRef}>
      <div className="search-container">
        <section className="stocks">
          {props.stocks.map((stock) => (
            <Link
              key={stock.symbol}
              className="stock-item-row"
              to={`/stocks/${stock.symbol}`}
              onClick={props.clearSearch}
            >
              <div
                className="stock-symbol"
                onFocus={() => props.setIsSearchMenuFocused(true)}
              >
                {stock.symbol}
              </div>
              <div className="stock-name">{stock.name}</div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
};

export default SearchMenu;
