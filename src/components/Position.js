import React, { useState, useEffect } from 'react';

const Pos = ({ ticker, numberShares }) => {
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

  const StockPrice = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/prices/${ticker}/${token}`
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
      const response = await fetch(`http://127.0.0.1:5000/api/logo/${ticker}`);
      const res = await response.json();
      if (res.logo) {
        setImage(res.logo);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const equity_amount = positionPrices * numberShares;

  const equity_amount_rounded = equity_amount.toLocaleString();

  return (
    <div className="position-home">
      <div className="position-logo">
        {image && <img src={image} width="30" height="30"></img>}
        <h2>
          <span>{ticker}</span>
        </h2>
      </div>
      <div className="position-equity">
        {equity && <h5> Total Equity: {'$' + equity_amount_rounded}</h5>}
        <p> {numberShares} Total Share(s)</p>
      </div>
    </div>
  );
};

export default Pos;
