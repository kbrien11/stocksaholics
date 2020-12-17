import React from 'react';

const LoserByTicker = (props) => {
  console.log(props);
  return (
    <div className='losers-by-ticker-ticker'>
      <h4>
        {' '}
        {props.ticker} <span>{props.percentChange}</span>
      </h4>
    </div>
  );
};

export default LoserByTicker;
