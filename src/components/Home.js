import React, { useState, useEffect } from 'react';
import { HomeHistory, Portfolio, Tracking, Trades } from './index';

const Home = () => {
  const [datas, setDatas] = useState([]);
  const [trackingdata, setTrackingData] = useState([]);
  const [trades, setTrades] = useState([]);
  const [token, setToken] = useState(sessionStorage.getItem('token'));

  useEffect(() => {
    getTracking();
  }, []);
  useEffect(() => {
    Equity();
  }, []);

  const Equity = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/${token}/equity`);
      const res = await response.json();
      setDatas(res.equity);
      console.log(res.equity);
    } catch (error) {
      console.log(error);
    }
  };

  const getTracking = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/gettracking/${token}`
      );
      const res = await response.json();
      setTrackingData(res.tracking);
      for (const i of res.tracking) {
        console.log(i);
      }
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  const watchlist = trackingdata.map((i) => {
    return <Tracking data={i} ticker={i[0]} />;
  });

  console.log(watchlist);

  const limit_trades = trades.map((i) => {
    return <Trades datas={i} ticker={i[0]} />;
  });

  return (
    <div>
      <div className='homebalance'>
        <h2> Total Equity</h2>

        <p>{'$' + datas + ''}</p>
      </div>

      {watchlist.length > 0 && (
        <div className='grid'>
          <div className='nested'>{watchlist}</div>
        </div>
      )}

      <div className='homeRow'>
        <div className='homeColumn'>
          <HomeHistory />
        </div>
        <div className='homeColumn'>
          <Portfolio />
        </div>
      </div>
    </div>
  );
};
export default Home;
