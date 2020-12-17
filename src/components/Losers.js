import React, { useState, useEffect } from 'react';
import LoserByTicker from './Loser-ticker';

const Losers = (props) => {
  useEffect(() => {
    TopLosers();
  }, []);

  const [losers, setLosers] = useState([]);
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');

  const TopLosers = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/top_losers/${token}`
      );
      const res = await response.json();
      console.log(res);

      if (res.losers) {
        setLosers(res.losers);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const output = Object.values(losers);

  //   const tickers = output.map((ticker) => {
  //     return <GainerByTicker ticker={ticker} />;
  //   });

  const PriceChange = output.map((ticker) => {
    return (
      <LoserByTicker
        ticker={ticker.ticker}
        percentChange={ticker.changesPercentage}
      />
    );
  });

  console.log(PriceChange);

  console.log(output);
  return <div> {PriceChange}</div>;
};

export default Losers;
