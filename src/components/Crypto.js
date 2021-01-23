import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import CryptoDataTable from './CryptoDataTable';
import CryptoNews from './CryptoNews';
import CryptoExchangeVolume from './CryptoExchangeVolume';
import CryptoMarketCap from './CryptoMarketCap';
<<<<<<< HEAD
import CryptoExchangeData from './CryptoExchangeData';
import CryptoCoinSingle from './CryptoCoinSingle';
import Bitcoin from './Bitcoin';
=======
>>>>>>> abac3e5d5b30ee6661144c959cbe87bc5130c270

const Crypto = () => {
  const [inputTicker, setInputTicker] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [data, setData] = useState([]);
  const [coins, setCoins] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [cryptoStats, setCryptoStats] = useState(false);
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');
  const [error, setError] = useState('');
  const [cryptoImage, setCryptoImage] = useState(false);
  const [news, setNews] = useState(false);
<<<<<<< HEAD

  useEffect(() => {
    Coins();
  }, []);

  const tickerUppercase = inputTicker.toUpperCase();
=======
>>>>>>> abac3e5d5b30ee6661144c959cbe87bc5130c270

  const CryptoPrice = async () => {
    try {
      setError(false);
      setCryptoImage();
      const response = await fetch(
        `http://127.0.0.1:5000/api/crypto_price/${tickerUppercase}/${token}`
      );
      const res = await response.json();
      if (res.crypto) {
        setData(res.crypto);
        Chart();
<<<<<<< HEAD
        setCryptoImage(true);
        setNews(true);
        setCryptoStats(false);
=======
        CryptoStats();
        setCryptoImage(true);
        setNews(true);
>>>>>>> abac3e5d5b30ee6661144c959cbe87bc5130c270
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  console.log(data);

  const Chart = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/crypto_Chart/${tickerUppercase}/${token}`
      );
      const res = await response.json();
      setChartData(res.chart);
    } catch (error) {
      console.log(error);
    }
  };

  const Coins = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/exchange_coins');
      const res = await response.json();
      setCoins(res.data);
      setCryptoStats(true);
    } catch (error) {
      console.log(error);
    }
  };

  const coinstats = () => {
    setCryptoStats(true);
  };

  const coinData = coins.map((coin) => {
    return (
      <CryptoCoinSingle
        price={coin.PRICE}
        supply={coin.SUPPLY}
        // volume={coin.VOLUMEDAY}
        twentyFourHourPercentChange={coin.CHANGEPCT24HOUR}
        dayChange={coin.CHANGEPCTHOUR}
        market={coin.MKTCAP}
        symbol={coin.FROMSYMBOL}
        name={coin.IMAGEURL}
      />
    );
  });

  // const track = async () => {
  //   const endpoint = `http://localhost:5000/api/track/${slice}/${token}`;
  //   const data = {
  //     ticker: slice
  //   };
  //   const configs = {
  //     method: 'POST',
  //     mode: 'cors',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(data)
  //   };
  //   const response = await fetch(endpoint, configs);
  //   const res = await response.json();
  //   console.log(res.token);
  // };

  const image = `https://cryptoicons.org/api/icon/${tickerUppercase}/200`;

  const track = async () => {
    const endpoint = `http://localhost:5000/api/track/${slice}/${token}`;
    const data = {
      ticker: slice
    };
    const configs = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    const response = await fetch(endpoint, configs);
    const res = await response.json();
    console.log(res.token);
  };

  const image = `https://cryptoicons.org/api/icon/${slice}/200`;

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
      {!cryptoStats && (
        <span>
          {' '}
          <button type="button" onClick={(e) => coinstats()}>
            {' '}
            Stats
          </button>{' '}
        </span>
      )}
      <br />
<<<<<<< HEAD
      {cryptoStats && (
        <table className="exchanges-table">
          <thead>
            <th>
              <div className="exchanges-table-headers">
                <div className="Exchanges-table-price-header">
                  <h3>Name</h3>
                </div>
                <div className="Exchanges-table-price-header">
                  <h3>Price</h3>
                </div>
                {/* <div className="Exchanges-table-price-header">
                  <h3>Volume</h3>
                </div> */}
                <div className="Exchanges-table-price-header">
                  <h3>Supply</h3>
                </div>
                <div className="Exchanges-table-price-header ">
                  <h3>Market</h3>
                </div>

                <div className="Exchanges-table-price-header">
                  <h3>Hourly change</h3>
                </div>
                <div className="Exchanges-table-price-header">
                  <h3>24HR change</h3>
                </div>
              </div>
            </th>
          </thead>
          <tbody>
            <tr>
              <td>{coinData[0]}</td>
            </tr>
            <tr>
              <td>{coinData[1]}</td>
            </tr>
            <tr>
              <td>{coinData[2]}</td>
            </tr>
            <tr>
              <td>{coinData[3]}</td>
            </tr>
            <tr>
              <td>{coinData[4]}</td>
            </tr>
            <tr>
              <td>{coinData[5]}</td>
            </tr>
            <tr>
              <td>{coinData[6]}</td>
            </tr>
            <tr>
              <td>{coinData[7]}</td>
            </tr>
            <tr>
              <td>{coinData[8]}</td>
            </tr>
            <tr>
              <td>{coinData[9]}</td>
            </tr>
            <tr>
              <td>{coinData[10]}</td>
            </tr>
            <tr>
              <td>{coinData[11]}</td>
            </tr>
            <tr>
              <td>{coinData[12]}</td>
            </tr>
            <tr>
              <td>{coinData[13]}</td>
            </tr>
            <tr>
              <td>{coinData[14]}</td>
            </tr>
            <tr>
              <td>{coinData[15]}</td>
            </tr>
            <tr>
              <td>{coinData[16]}</td>
            </tr>
            <tr>
              <td>{coinData[17]}</td>
            </tr>
          </tbody>
        </table>
      )}
=======
>>>>>>> abac3e5d5b30ee6661144c959cbe87bc5130c270
      <div className="crypto-image">
        {cryptoImage && <img src={image} height="50" width="60" />}
      </div>
      <div className="crypto-chart">
<<<<<<< HEAD
        {chartData.length > 0 && (
=======
        {data.length > 0 && (
>>>>>>> abac3e5d5b30ee6661144c959cbe87bc5130c270
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
<<<<<<< HEAD
            layout={{ width: 950, height: 440, title: '$' + '' + data }}
=======
            layout={{ width: 950, height: 440, title: '$' + '' + currentPrice }}
>>>>>>> abac3e5d5b30ee6661144c959cbe87bc5130c270
          />
        )}

        {/* {data.length > 0 && (
          <button type="button" onClick={(e) => track()}>
            {' '}
            Add {slice} to Watchlist
          </button>
        )}
        <br /> */}
<<<<<<< HEAD
      </div>
      <div>
        {/* {cryptoStats.length > 0 && (
          <table className="crypto-table">
            <thead>
              <tr>
                <th> Name</th>
                <th>Price</th>
                <th> FCAS Rating</th>
                <th> Score</th>
                <th> Market Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{cryptoStats[0]}</td>
                <td>{data.length > 0 && '$' + currentPrice}</td>
                <td>{cryptoStats[1]}</td>
                <td>{cryptoStats[2]}</td>
                <td>{cryptoStats[3]}</td>
              </tr>
            </tbody>
          </table>
        )} */}
      </div>
=======
      </div>
      <div>
        {/* {cryptoStats.length > 0 && (
          <table className="crypto-table">
            <thead>
              <tr>
                <th> Name</th>
                <th>Price</th>
                <th> FCAS Rating</th>
                <th> Score</th>
                <th> Market Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{cryptoStats[0]}</td>
                <td>{data.length > 0 && '$' + currentPrice}</td>
                <td>{cryptoStats[1]}</td>
                <td>{cryptoStats[2]}</td>
                <td>{cryptoStats[3]}</td>
              </tr>
            </tbody>
          </table>
        )} */}
      </div>
>>>>>>> abac3e5d5b30ee6661144c959cbe87bc5130c270
      {news && (
        <div className="Crypto-Home-volume">
          <CryptoExchangeVolume />
        </div>
      )}
      {news && (
<<<<<<< HEAD
        <div className="crypto-supply-exchange-flex">
          <div className="Crypto-Home-Supply">
            <CryptoMarketCap />
          </div>
          <div className="crypto-home-exchange">
            <CryptoExchangeData />
          </div>
=======
        <div className="Crypto-Home-Supply">
          <CryptoMarketCap />
>>>>>>> abac3e5d5b30ee6661144c959cbe87bc5130c270
        </div>
      )}
      {news && <CryptoNews />}
    </div>
  );
};
export default Crypto;
