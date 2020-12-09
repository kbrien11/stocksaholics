import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const Tracking = ({ ticker }) => {
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');
  const [datas, setDatas] = useState([]);
  const [data, setData] = useState([]);
  const [low, setLow] = useState([]);
  const [recco, setRec] = useState('');
  const [ratio, setRatio] = useState([]);
  const [trackingChart, setTrackingChart] = useState([]);
  const [change, setChange] = useState('');
  const [yearChange, setYearChange] = useState([]);

  useEffect(() => {
    StockPrice();
  }, []);

  const StockPrice = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/prices/${ticker}/${token}`
      );
      const res = await response.json();
      console.log(res);
      setTrackingChart(res.tracker);

      if (res.current_price) {
        setDatas(res.current_price);
        setData(res.stats);
        setLow(res.low);
        setRatio(res.ratio);
        setChange(res.change);
        setYearChange(res.yearchange);
        console.log(res.current_price);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const price = datas.toLocaleString();

  console.log(trackingChart);

  console.log(change);
  return (
    <div class='rowss'>
      <div class='colum'>
        <div class='cards'>
          <h2>{ticker}</h2>

          <h5> 24HR Change</h5>
          <h4> {change > 0 ? '+' + change : change}</h4>

          <h3> {'$' + price}</h3>
        </div>
        <div className='tracking-chart'>
          <Plot
            data={[
              {
                x: trackingChart[0],
                y: trackingChart[1],
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'lightgteen' }
              }
            ]}
            layout={{
              width: 300,
              height: 280,
              title: data[1]
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Tracking;
