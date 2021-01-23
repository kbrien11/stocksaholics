import React from 'react';

const Coinbase = ({ toSymbol, fromSymbol, volume }) => {
  const vol = parseFloat(volume).toFixed(2);
  return (
    <div className="crypto-data-asset">
      <h4>
        {fromSymbol} <span> {vol}</span>
      </h4>
    </div>
  );
};

export default Coinbase;
