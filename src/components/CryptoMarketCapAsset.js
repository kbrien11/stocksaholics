import React from 'react';

const CryptoMarketCapAsset = ({ name, supply, symbol }) => {
  const vol = parseFloat(supply).toFixed(2);
  const lower = symbol.toLowerCase();
  const image = `https://cryptoicons.org/api/icon/${lower}/200`;

  return (
    <div className="crypto-supply-flex">
      <div className="crypto-image">
        <img src={image} height="30" width="40" />
      </div>
      <div className="crypto-supply-name">
        <p>{name}</p>
      </div>
      <div className="crypto-supply">
        <p>{vol}</p>
      </div>
    </div>
  );
};
export default CryptoMarketCapAsset;
