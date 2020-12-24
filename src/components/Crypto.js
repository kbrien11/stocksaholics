import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import CryptoDataTable from './CryptoDataTable';

const Crypto = () => {
  const [inputTicker, setInputTicker] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [cryptoStats, setCryptoStats] = useState([]);
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');
  const [error, setError] = useState('');

  const CryptoPrice = async () => {
    try {
      setError(false);
      const response = await fetch(
        `http://127.0.0.1:5000/api/crypto_price/${inputTicker}/${token}`
      );
      const res = await response.json();
      if (res.crypto) {
        setData(res.crypto);
        Chart();
        CryptoStats();
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const slice = inputTicker.substring(0, inputTicker.length - 3);
  console.log(slice);

  const Chart = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/crypto_Chart/${slice}/${token}`
      );
      const res = await response.json();
      setChartData(res.chart);
    } catch (error) {
      console.log(error);
    }
  };

  const CryptoStats = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/crypto_stats/${slice}/${token}`
      );
      const res = await response.json();
      setCryptoStats(res.crypto);
    } catch (error) {
      console.log(error);
    }
  };

  const results = (
    <CryptoDataTable
      name={cryptoStats[0]}
      rating={cryptoStats[1]}
      score={cryptoStats[2]}
      market={cryptoStats[3]}
    />
  );
  console.log(results);

  const currentPrice = data.toLocaleString();
  return (
    <div class="cryptoInfo">
      <input
        type="text"
        placeholder="Symbol"
        onChange={(e) => setInputTicker(e.target.value)}
      />{' '}
      <br />
      {error && <p>crypto doesnt exist, try again</p>}
      <button type="button" onClick={(e) => CryptoPrice()}>
        {' '}
        Search
      </button>{' '}
      <br />
      <div class="cryptoPrice">
        {data.length > 0 && <h3> Current Price:</h3>}
        <p>{data.length > 0 && '$' + currentPrice}</p>
        <div>
          {cryptoStats.length > 0 && (
            <table className="tracking-table">
              <thead>
                <tr>
                  <th> Name</th>
                  <th> FCAS Rating</th>
                  <th> Score</th>
                  <th> Market Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{cryptoStats[0]}</td>
                  <td>{cryptoStats[1]}</td>
                  <td>{cryptoStats[2]}</td>
                  <td>{cryptoStats[3]}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div>
        {data.length > 0 && (
          <Plot
            data={[
              {
                x: chartData[0],
                y: chartData[1],
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'lightGreen', backgroundColor: 'blue' }
              }
            ]}
            layout={{ width: 720, height: 440, title: slice }}
          />
        )}
      </div>
    </div>
  );
};
export default Crypto;
