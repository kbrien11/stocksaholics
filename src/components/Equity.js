import React, { useState, useEffect } from 'react';

const CurrentEquity = (props) => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');

  useEffect(() => {
    balance();
  }, []);

  const balance = async () => {
    try {
      const response = await fetch(
        `https://cryptostocks.herokuapp.com/api/${token}/balance`
      );
      const res = await response.json();
      setData(res.balance);
    } catch (error) {
      console.log(error);
    }
  };

  return <div>{data}</div>;
};
export default CurrentEquity;
