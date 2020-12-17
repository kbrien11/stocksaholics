import React, { useState, useEffect } from 'react';
import Trades from './Trades';

const History = (props) => {
  const [datas, setDatas] = useState([]);
  const [green, setGreen] = useState(false);
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');
  useEffect(() => {
    Trade();
  }, []);

  const Trade = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/${token}/trades`);
      const res = await response.json();
      setDatas(res.trades);
      console.log(res.trades);
      // for( const obj of res.trades){
      //     if((obj[5]) ='Market Buy') {
      //        setGreen(true)
      //     }
      // }
    } catch (error) {
      console.log(error);
    }
  };

  const trades = datas.map((i) => {
    return <Trades datas={i} />;
  });

  return (
    <div className='trade-history-container'>
      <table className='trade-history-table'>
        <thead>
          <tr>
            <th> Trades</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{trades.length > 0 && trades}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default History;
