import React, { useState, useEffect } from 'react';

const CryptoCoins = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Coins();
  }, []);

  const Coins = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/exchange_coins');
      const res = await response.json();
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  return <div> Hi</div>;
};

export default CryptoCoins;
