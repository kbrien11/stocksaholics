<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import CryptoMarketCapAsset from './CryptoMarketCapAsset';

const CryptoMarketCap = () => {
  const [marketCapData, setMarketCapData] = useState([]);

  useEffect(() => {
    Market();
  }, []);

  const Market = async () => {
    try {
      const response = await fetch(
        'http://127.0.0.1:5000/api/crypto_market_cap'
      );
      const res = await response.json();
      setMarketCapData(res.marketCap);
    } catch (error) {
      console.log(error);
    }
  };

  const output = Object.values(marketCapData);

  const data = output.map((market) => {
    return (
      <CryptoMarketCapAsset
        name={market.FullName}
        supply={market.MaxSupply}
        symbol={market.Name}
      />
    );
  });

  console.log(marketCapData);

  return (
    <div>
      <table className="supply-table">
        <thead>
          <tr>
            <th> Total Supply by Asset</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CryptoMarketCap;
=======
import React, { useEffect, useState } from 'react';
import CryptoMarketCapAsset from './CryptoMarketCapAsset';

const CryptoMarketCap = () => {
  const [marketCapData, setMarketCapData] = useState([]);

  useEffect(() => {
    Market();
  }, []);

  const Market = async () => {
    try {
      const response = await fetch(
        'http://127.0.0.1:5000/api/crypto_market_cap'
      );
      const res = await response.json();
      setMarketCapData(res.marketCap);
    } catch (error) {
      console.log(error);
    }
  };

  const output = Object.values(marketCapData);

  const data = output.map((market) => {
    return (
      <CryptoMarketCapAsset
        name={market.FullName}
        supply={market.MaxSupply}
        symbol={market.Name}
      />
    );
  });

  console.log(marketCapData);

  return (
    <div className="marketCap-container">
      <table className="supply-table">
        <thead>
          <tr>
            <th> Total Supply by Asset</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CryptoMarketCap;
>>>>>>> abac3e5d5b30ee6661144c959cbe87bc5130c270
