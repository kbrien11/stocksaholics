import React, { useState, useEffect } from 'react';

const Tracking = ({ ticker }) => {
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');
  const [datas, setDatas] = useState([]);
  const [data, setData] = useState([]);
  const [low, setLow] = useState([]);
  const [recco, setRec] = useState('');
  const [ratio, setRatio] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [change, setChange] = useState('');
  const [yearChange, setYearChange] = useState([]);

  useEffect(() => {
    StockPrice();
  }, []);
  useEffect(() => {
    Reccomendation();
  }, []);

  const StockPrice = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/prices/${ticker}/${token}`
      );
      const res = await response.json();
      if (res.current_price) {
        setDatas(res.current_price);
        setData(res.stats);
        setLow(res.low);
        setRatio(res.ratio);
        setChange(res.change);
        setChartData(res.tracker_chart);
        setYearChange(res.yearchange);
        console.log(res.current_price);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Reccomendation = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/recco/${ticker}/${token}`
      );
      const res = await response.json();
      if (res.current) {
        setRec(res.current);

        console.log(res.current);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(recco);

  const updateColor = () => {
    if (change < 0) {
      return 'red';
    } else {
      return 'green';
    }
  };

  const price = datas.toLocaleString();
  const amounts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(chartData);

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
      </div>
    </div>
  );
};
export default Tracking;
