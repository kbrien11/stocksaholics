<<<<<<< HEAD
import React from 'react';

const Binance = ({ toSymbol, fromSymbol, volume }) => {
  const vol = parseFloat(volume).toFixed(2);

  return (
    <div className="crypto-data-asset">
      <h4>
        {fromSymbol} <span> {vol}</span>
      </h4>
    </div>
  );
};

export default Binance;
=======
import React from 'react';

const Binance = ({ toSymbol, fromSymbol, volume }) => {
  const vol = parseFloat(volume).toFixed(2);

  return (
    <div className="crypto-data-asset">
      <h4>
        {fromSymbol} <span> {vol}</span>
      </h4>
    </div>
  );
};

export default Binance;
>>>>>>> abac3e5d5b30ee6661144c959cbe87bc5130c270
