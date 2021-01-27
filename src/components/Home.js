import React, { useState, useEffect } from 'react';
import { HomeHistory, Portfolio, Tracking, Trades } from './index';
import Gainers from './Gainers';
import Losers from './Losers';
import UsdChart from './UsdChart';
import StockNews from './StockNews';
import moment from 'moment';

import HomeEquityChart from './HomeEquityChart';

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
      const response = await fetch(
        `https://cryptostocks.herokuapp.com/api/${token}/equity`
      );
      const res = await response.json();
      console.log(res);
      setDatas(res['equity']);

      console.log(res.equity);
    } catch (error) {
      console.log(error);
    }

    const endpoint = `https://cryptostocks.herokuapp.com/api/equity_date/${token}`;
    const data = {
      equity: datas,
      unix_time: now
    };
    const configs = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    const response = await fetch(endpoint, configs);
    const res = await response.json();
    console.log(data);
  };
  // const updatedEquity = datas.toLocaleString();

  let now = moment().format('MM/DD/YYYY');

  // const dateForEquityChart = async () => {
  //   const endpoint = `http://localhost:5000/api/equity_date/${token}`;
  //   const data = {
  //     equity: updatedEquity,
  //     unix_time: now
  //   };
  //   const configs = {
  //     method: 'POST',
  //     mode: 'cors',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(data)
  //   };
  //   const response = await fetch(endpoint, configs);
  //   const res = await response.json();
  //   console.log(data);
  // };

  // const sendDateEquity = () => {
  //   dateForEquityChart();
  // };

  const getTracking = async () => {
    try {
      const response = await fetch(
        `https://cryptostocks.herokuapp.com/api/gettracking/${token}`
      );
      const res = await response.json();
      setTrackingData(res);
      for (const i of res) {
        console.log(i);
      }
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  const watchlist = trackingdata.map((i) => {
    return <Tracking data={i} ticker={i.ticker} />;
  });

  console.log(watchlist);

  const limit_trades = trades.map((i) => {
    return <Trades datas={i} ticker={i[0]} />;
  });

  return (
    <div>
      <div className="homebalance">
        <h2> Total Equity</h2>

        <p>{'$' + datas + ''}</p>
      </div>

      <div>
        <HomeEquityChart />
      </div>

      {/* <button onClick={(e) => dateForEquityChart()}>Logout</button> */}

      <div className="home-watchlist-center">
        <table className="tracking-table">
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

      {/* <div className='home-gainer-loser-container'> */}
      <div className="home-gainer-flex">
        <table className="gainers-table">
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

        <table className="losers-table">
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
      {/* </div> */}

      <div className="usd-chard-container">
        <UsdChart />
      </div>

      {datas && (
        <div className="position-transactions-container">
          <div className="homeRow">
            <div className="homeColumn-transactions">
              <HomeHistory />
            </div>
            <div className="homeColumn-positions">
              <Portfolio />
            </div>
          </div>
        </div>
      )}
      <div>
        <StockNews />
      </div>
    </div>
  );
};
export default Home;
