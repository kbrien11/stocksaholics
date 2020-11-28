import React, { useState, useEffect } from 'react';

const Pos = (props) => {
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');
  const [positionPrices, setPositionPrices] = useState([]);
  const [equity, setEquity] = useState(false);
  const [image, setImage] = useState('');

  const [totalEquity, setTotalEquity] = useState([]);

  useEffect(() => {
    StockPrice();
  }, []);

  useEffect(() => {
    companyLogo();
  }, []);

  console.log(props);

  const StockPrice = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/prices/${props.position[0]}/${token}`
      );
      const res = await response.json();
      if (res.current_price) {
        setPositionPrices(res.current_price);
        setEquity(true);
        console.log(res.pos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const companyLogo = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/logo/${props.position[0]}`
      );
      const res = await response.json();
      if (res.logo) {
        setImage(res.logo);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const equity_amount = positionPrices * props.position[1];

  const equity_amount_rounded = equity_amount.toLocaleString();

  return (
    <div class='table-box'>
      <div class='table-row'>
        <div class='table-cell'>
          <div class='homePositions'>
            {image && (
              <img
                className='position-logo'
                src={image}
                width='30'
                height='50'
              ></img>
            )}
            <h2> {props.position[0]}</h2>
            {equity && <p> Total Equity: {'$' + equity_amount_rounded}</p>}
            <p> {props.position[1]} Shares</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pos;
