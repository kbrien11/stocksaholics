import React from 'react';
import { FavoriteIcon } from '../../components/common';

const StockHeadline = (props) => {
  console.log(props);
  const stock =
    props.stock &&
    props.stock.current_price &&
    props.stock.current_price.length > 0
      ? props.stock.current_price
      : [];
  return (
    <React.Fragment>
      <div className="stock-headline">
        <div className="stock-headline-ticker">
          {stock && stock.length > 0 && stock[1]}
        </div>
        <div className="stock-headline-name">
          {stock && stock.length > 0 && stock[0]}
        </div>
        <div className="favorite-icon">
          <FavoriteIcon />
        </div>
      </div>
      <div className="stock-headline-price">
        {stock && stock.length > 2 && `$${stock[2]}`}
      </div>
    </React.Fragment>
  );
};

export default StockHeadline;
