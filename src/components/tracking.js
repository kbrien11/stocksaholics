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
        `http://127.0.0.1:5000/api/prices/${ticker}/${token}`
      );
      const res = await response.json();
      console.log(res);

      if (res.current_price) {
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
        `http://127.0.0.1:5000/api/tracking_chart/${ticker}/${token}`
      );
      const res = await response.json();
      console.log(res);

      if (res.tracker) {
        setTrackingChart(res.tracker);
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

          <div className="tracking-price">
            <h3> {'$' + price}</h3>
          </div>

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
              width: 300,
              height: 280
            }}
          />
        </div>
        <hr className="v1"></hr>
      </div>
    </div>
  );
};
export default Tracking;
