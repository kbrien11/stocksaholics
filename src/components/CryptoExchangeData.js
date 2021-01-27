import React, { useState, useEffect } from 'react';
import CryptoExchangeSingle from './CryptoExchangeSingle';

const CryptoExchangeData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    exchangeData();
  }, []);

  const exchangeData = async () => {
    try {
      const response = await fetch(
        'https://cryptostocks.herokuapp.com/api/exchange_data'
      );
      const res = await response.json();
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const output = Object.values(data);
  console.log(output);

  const exchanges = output.map((exchange) => {
    return (
      <CryptoExchangeSingle
        url={exchange.AffiliateURL}
        country={exchange.Country}
        grade={exchange.Grade}
        gradePoints={exchange.GradePoints}
        name={exchange.Name}
        bio={exchange.Description}
      />
    );
  });

  const result = exchanges.filter(
    (exchange) => exchange.Name == 'Gemini' && exchange.Name == 'Coinbase'
  );

  console.log(exchanges);

  //   const gem = Object.values(data['13328']);
  //   const coinbase = Object.values(data['2943']);
  //   const binance = Object.values(data['283442']);

  return (
    <div>
      {' '}
      <table className="top-exchange-table">
        <thead>
          <tr>
            <th> Top Rated Exchanges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{exchanges[0]}</td>
          </tr>
          <tr>
            <td>{exchanges[1]}</td>
          </tr>
          <tr>
            <td>{exchanges[2]}</td>
          </tr>
          <tr>
            <td>{exchanges[3]}</td>
          </tr>
          <tr>
            <td>{exchanges[4]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CryptoExchangeData;
