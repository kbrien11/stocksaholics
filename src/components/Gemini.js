<<<<<<< HEAD
import React from 'react';

const Gemini = ({ toSymbol, fromSymbol, volume }) => {
  const vol = parseFloat(volume).toFixed(2);

  return (
    <div className="crypto-data-asset">
      <h4>
        {fromSymbol} <span> {vol}</span>
      </h4>
    </div>
  );
};

export default Gemini;
=======
import React from 'react';

const Gemini = ({ toSymbol, fromSymbol, volume }) => {
  const vol = parseFloat(volume).toFixed(2);

  return (
    <div className="crypto-data-asset">
      <h4>
        {fromSymbol} <span> {vol}</span>
      </h4>
    </div>
  );
};

export default Gemini;
>>>>>>> abac3e5d5b30ee6661144c959cbe87bc5130c270
