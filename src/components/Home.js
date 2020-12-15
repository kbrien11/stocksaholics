import React, { useState, useEffect } from 'react';
import { HomeHistory, Portfolio, Tracking, Trades } from './index';
import Gainers from './Gainers';
import Losers from './Losers';

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

  const updatedEquity = datas.toLocaleString();

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

        <p>{'$' + updatedEquity + ''}</p>
      </div>

      {/* {watchlist.length > 0 && (
        <div className='grid'>
          <div className='nested'>{watchlist}</div>
        </div>
      )} */}

      <div className='home-watchlist-center'>
        <table className='tracking-table'>
          <thead>
            <tr>
              <th> Watchlist</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{watchlist}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='gainer-loser-flex'>
        <div className='home-gainer-flex'>
          <table className='gainers-table'>
            <thead>
              <tr>
                <th> Top Gainers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Gainers />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='home-loser-flex'>
          <table className='losers-table'>
            <thead>
              <tr>
                <th> Top Losers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Losers />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='homeRow'>
        <div className='homeColumn-transactions'>
          <HomeHistory />
        </div>
        <div className='homeColumn-positions'>
          <Portfolio />
        </div>
      </div>
    </div>
  );
};
export default Home;
