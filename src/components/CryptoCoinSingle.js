import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { FaArrowLeft, FaChartBar } from 'react-icons/fa';

const CryptoCoinSingle = ({
  price,
  supply,
  volume,
  twentyFourHourPercentChange,
  dayChange,
  market,
  symbol,
  name
}) => {
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');
  const [chartData, setChartData] = useState([]);
  const [cryptoChart, setCryptoChart] = useState(false);
  const [sevenDayCryptoChart, setSevenDayCryptoChart] = useState([]);
  const [dropDown, setDropDown] = useState(false);

  const priceRounded = parseFloat(price).toLocaleString('en');
  const mktCap = market.toLocaleString();
  const totalSupply = parseFloat(supply).toLocaleString('en');

  const lower = symbol.toLowerCase();
  const image = `https://cryptoicons.org/api/icon/${lower}/200`;

  const daychangeround = Number.parseFloat(dayChange).toFixed(2);
  const changetwentyfourhourround = Number.parseFloat(
    twentyFourHourPercentChange
  ).toFixed(2);

  const Chart = async () => {
    try {
      const response = await fetch(
        `https://cryptostocks.herokuapp.com/api/crypto_Chart/${symbol}/${token}`
      );
      const res = await response.json();
      setChartData(res.chart);
      setSevenDayCryptoChart(false);
    } catch (error) {
      console.log(error);
    }
  };

  const WeeklyChart = async () => {
    try {
      const response = await fetch(
        `https://cryptostocks.herokuapp.com/api/weekly_crypto_chart/${symbol}`
      );
      const res = await response.json();
      setSevenDayCryptoChart(res.sevenDayChart);
      setChartData(false);
    } catch (error) {
      console.log(error);
    }
  };

  const setBarOn = () => {
    setCryptoChart(true);
    Chart();
  };

  const setBarOff = () => {
    setChartData(false);
    setSevenDayCryptoChart(false);
    setDropDown(false);
  };

  const setDropdownTrue = () => {
    setDropDown(true);
    console.log('hi');
  };

  return (
    <div className="crypto-exchange-data">
      {!cryptoChart && (
        <div className="crypto-exchange-symbol">
          {' '}
          <span>
            {' '}
            <img src={image} height="30" width="30" />
          </span>
          {symbol}
        </div>
      )}
      {!cryptoChart && (
        <div className="crypto-exchange-price">{'$' + priceRounded}</div>
      )}
      {/* <div className="crypto-exchange-volume">
        {'$' + totalNotionalVol} <br />
        {totalVolume} <span> {symbol}</span>
      </div> */}
      {!cryptoChart && (
        <div className="crypto-exchange-supply">{totalSupply}</div>
      )}
      {!cryptoChart && <div className="crypto-exchange-market">{mktCap}</div>}

      {!cryptoChart && (
        <div className="crypto-exchange-dayChange">
          {dayChange < 0 ? (
            <div className="dayChangeNeg"> {daychangeround + '%'}</div>
          ) : (
            <div className="dayChangePos">
              {' '}
              <span> +</span>
              {daychangeround + '%'}{' '}
            </div>
          )}
        </div>
      )}

      {!cryptoChart && (
        <div className="crypto-exchange-24-change">
          {changetwentyfourhourround < 0 ? (
            <div className="dayChangeNeg">
              {' '}
              {changetwentyfourhourround + '%'}
            </div>
          ) : (
            <div className="dayChangePos">
              {' '}
              <span> +</span>
              {changetwentyfourhourround + '%'}{' '}
            </div>
          )}
        </div>
      )}

      <div className="dropdown">
        {!dropDown && (
          <div className="chart-button">
            <button onClick={(e) => setDropdownTrue()}>
              <FaChartBar />
            </button>
          </div>
        )}

        {dropDown && (
          <div className="dropdown-content">
            <button onClick={(e) => WeeklyChart()}>Weekly Chart</button>

            <button onClick={(e) => Chart()}>Historical Chart</button>
            <button onClick={(e) => setBarOff()}>
              {' '}
              <FaArrowLeft />
            </button>
          </div>
        )}
      </div>

      {sevenDayCryptoChart.length > 0 && (
        <Plot
          data={[
            {
              x: sevenDayCryptoChart[0],
              y: sevenDayCryptoChart[1],
              //   type: 'scatter',
              //   mode: 'lines+markers',
              marker: { color: 'lightGreen', backgroundColor: 'blue' }
            }
          ]}
          layout={{ width: 350, height: 250 }}
        />
      )}
      {chartData.length > 0 && (
        <div>
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
            layout={{ width: 350, height: 300, title: '$' + priceRounded }}
          />
        </div>
      )}
    </div>
  );
};

export default CryptoCoinSingle;
