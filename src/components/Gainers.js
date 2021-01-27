import React, { useState, useEffect } from 'react';
import GainerByTicker from './GainerByTicker';

const Gainers = (props) => {
  useEffect(() => {
    TopGainers();
  }, []);

  const [gainers, setGainers] = useState([]);
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');

  const TopGainers = async () => {
    try {
      const response = await fetch(
        `https://cryptostocks.herokuapp.com/api/top_gainers/${token}`
      );
      const res = await response.json();
      console.log(res);

      if (res.gainers) {
        setGainers(res.gainers);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const output = Object.values(gainers);

  //   const tickers = output.map((ticker) => {
  //     return <GainerByTicker ticker={ticker} />;
  //   });

  const PriceChange = output.map((ticker) => {
    return (
      <GainerByTicker
        ticker={ticker.ticker}
        percentChange={ticker.changesPercentage}
      />
    );
  });

  console.log(PriceChange);

  console.log(output);
  return <div> {PriceChange}</div>;
};

export default Gainers;
