import React from 'react';

const LoserTicker = (props) => {
  return (
    <div className="losers-by-ticker-ticker">
      <h4>
        {props.ticker} <span>{props.percentChange}</span>
      </h4>
    </div>
  );
};

export default LoserTicker;
