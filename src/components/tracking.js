import React, { useState, useEffect } from 'react';

const Tracking = (props) => {
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');
  const [datas, setDatas] = useState([]);
  const [data, setData] = useState([]);
  const [low, setLow] = useState([]);
  const [recco, setRec] = useState('');
  const [ratio, setRatio] = useState([]);
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
        `http://127.0.0.1:5000/api/prices/${props.data[0]}/${token}`
      );
      const res = await response.json();
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

  const Reccomendation = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/recco/${props.data[0]}/${token}`
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
  const separator = data.toLocaleString();
  const lowSep = low.toLocaleString();
  console.log(change);
  return (
    <div class="rowss">
      <div class="colum">
        <div class="cards">
          <h2>{props.data[0]}</h2>
          <hr color="black"></hr>
          <h5> 24HR Change</h5>
          <h4> {change > 0 ? '+' + change : change}</h4>
          <h4>{recco}</h4>
          <h3> {'$' + price}</h3>
          <p> Week52high: {'$' + separator}</p>
          <p> Week52low: {'$' + lowSep}</p>
          <p> P/E Ratio: {ratio}</p>
        </div>
      </div>
    </div>
  );
};
export default Tracking;
