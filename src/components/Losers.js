import React, { useState, useEffect } from 'react';
import LoserTicker from './LoserTicker';

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
      console.log(res.losers);
      if (res.losers) {
        setLosers(res.losers);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {losers &&
        losers.map((loser) => (
          <LoserTicker
            ticker={loser.ticker}
            percentChange={loser.changesPercentage}
          />
        ))}
    </div>
  );
};

export default Losers;
