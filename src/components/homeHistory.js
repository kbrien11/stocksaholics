import React, { useState, useEffect } from 'react';
import Trades from './HomeTrades';

const HomeHistory = () => {
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    TradeHistory();
  }, []);

  const TradeHistory = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/${token}/recent`);
      const res = await response.json();
      setTrades(res.trades);
      console.log(res.trades);
    } catch (error) {
      console.log(error);
    }
  };

  const limit_trades = trades.map((i) => {
    return <Trades datas={i} />;
  });

  return <div>{limit_trades}</div>;
};

export default HomeHistory;
