import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const Tracking = ({ ticker }) => {
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');
  const [datas, setDatas] = useState([]);
  const [data, setData] = useState([]);
  const [low, setLow] = useState([]);
  const [recco, setRec] = useState('');

  const [trackingChart, setTrackingChart] = useState([]);
  const [change, setChange] = useState('');
  const [yearChange, setYearChange] = useState([]);

  useEffect(() => {
    StockPrice();
  }, []);

  useEffect(() => {
    TrackingChart();
  }, []);

  const StockPrice = async () => {
    try {
      const response = await fetch(
        `https://cryptostocks.herokuapp.com/api/prices/${ticker}/${token}`
      );
      const res = await response.json();
      console.log(res);

      if (res) {
        setDatas(res.current_price);
        setChange(res.change);
        console.log(res.current_price);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const TrackingChart = async () => {
    try {
      const response = await fetch(
        `https://cryptostocks.herokuapp.com/api/tracking_chart/${ticker}/${token}`
      );
      const res = await response.json();
      console.log(res);

      if (res) {
        setTrackingChart(res);
        console.log(res.tracker);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const price = datas.toLocaleString();

  console.log(change);
  return (
    <div className="rows">
      <div className="column">
        <div className="tracking">
          <h2>
            {ticker} <span> ({change > 0 ? '+' + change : change})</span>
          </h2>

          <h3> {'$' + price}</h3>

          <Plot
            data={[
              {
                x: trackingChart[0],
                y: trackingChart[1],
                type: 'scatter',
                line: {
                  color: 'darkblue',
                  width: 2
                }
              }
            ]}
            layout={{
              width: 220,
              height: 320
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Tracking;
