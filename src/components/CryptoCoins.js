import React, { useState, useEffect } from 'react';
import CryptoCoinSingle from './CryptoCoinSingle'

const CryptoCoins = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Coins();
  }, []);

  const Coins = async () => {
    try {
      const response = await fetch('https://cryptostocks.herokuapp.com/api/exchange_coins');
      const res = await response.json();
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const coins = data.map((coin) => {
      return <CryptoCoinSingle name = {coin.CoinName} supply = {coin.MaxSupply}
  }


