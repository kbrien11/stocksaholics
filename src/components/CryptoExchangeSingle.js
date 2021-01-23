import React from 'react';

const CryptoExchangeSingle = ({ url, country, grade, gradePoints, name }) => {
  return (
    <div className="crypto-exchange-data">
      <div className="crypto-exchange-name">
        <h3>
          {name} <p>({country})</p>
        </h3>
      </div>

      <div className="crypto-exchange-bio">{gradePoints}</div>
      <div className="crypto-exchange-url">
        <a href={url} target="_blank">
          View
        </a>
      </div>
    </div>
  );
};
export default CryptoExchangeSingle;
