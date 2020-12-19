import React from 'react';

const StockCard = (props) => {
  const stock =
    props.stock &&
    props.stock.current_price &&
    props.stock.current_price.length > 0
      ? props.stock.current_price
      : [];
  return (
    <div className="stock-card">
      <h2>{stock && stock.length > 0 && stock[0]}</h2>
      <h3>{stock && stock.length > 2 && stock[2]}</h3>
    </div>
  );
};

export default StockCard;
