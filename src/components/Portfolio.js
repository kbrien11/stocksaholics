import React, { useState, useEffect } from 'react';
import Pos from './Position';

const Portfolio = () => {
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');
  const [positions, setPositions] = useState([]);
  const [datas, setDatas] = useState([]);
  const [datass, setDatass] = useState([]);
  const [total, setTotal] = useState(0);
  const [equity, setEquity] = useState(false);

  useEffect(() => {
    Positions();
  }, []);
  useEffect(() => {
    Total();
  }, []);

  const Positions = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/${token}/positions`
      );
      const res = await response.json();
      setPositions(res.Positions);
      console.log(res.Positions);
    } catch (error) {
      console.log(error);
    }
  };

  const Total = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/total_shares/${token}`
      );
      const res = await response.json();
      setTotal(res.total);
      console.log(res.total);
    } catch (error) {
      console.log(error);
    }
  };

  const current_positions = positions.map((position) => {
    return <Pos position={position} />;
  });

  console.log(total);

  return <div>{current_positions}</div>;
};
export default Portfolio;
