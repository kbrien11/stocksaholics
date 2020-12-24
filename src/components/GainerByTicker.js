import React from 'react';

const GainerByTicker = (props) => {
  console.log(props);
  return (
    <div className="gainers-by-ticker-ticker">
      <h4>
        {' '}
        {props.ticker} <span>{props.percentChange}</span>
      </h4>
    </div>
  );
};

export default GainerByTicker;
