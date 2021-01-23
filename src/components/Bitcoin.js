import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const Bitcoin = ({
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

  const slicePrice = price.substring(1, price.length);
  const sliceVolume = volume.replace(/[^\d.-]/g, '');
  const sliceSupply = supply.replace(/[^\d.-]/g, '');
  const sliceMarket = market.replace(/[^\d.-]/g, '');

  const sliceName = name.substring(1, name.length - 3);
  console.log(sliceName);
  const symbolName = sliceName.substring(sliceName.length - 4);
  //   useEffect(() => {
  //     Chart();
  //   }, []);

  //   const Chart = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://127.0.0.1:5000/api/crypto_Chart/${symbol}/${token}`
  //       );
  //       const res = await response.json();
  //       setChartData(res.chart);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <div className="crypto-exchange-data">
      <div className="crypto-exchange-symbol">{symbolName}</div>
      <div className="crypto-exchange-price">
        <h3>{slicePrice}</h3>
      </div>
      <div className="crypto-exchange-volume">
        <h3>{sliceVolume}</h3>
      </div>
      <div className="crypto-exchange-supply">
        <h3>{sliceSupply}</h3>
      </div>
      <div className="crypto-exchange-market">
        <h3>{sliceMarket}</h3>
      </div>
      <div className="crypto-exchange-dayChange">
        <h3>{dayChange}</h3>
      </div>

      <div className="crypto-exchange-24-change">
        <h3>{twentyFourHourPercentChange}</h3>
      </div>

      {/* <div className="crypto-exchange-bio">
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
          layout={{ width: 450, height: 340 }}
        />
      </div> */}
    </div>
  );
};

export default Bitcoin;
