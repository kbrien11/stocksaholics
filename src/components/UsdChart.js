import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const UsdChart = () => {
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');
  const [USDChart, setUSDChart] = useState([]);

  useEffect(() => {
    Chart();
  }, []);

  const Chart = async () => {
    try {
      const response = await fetch(
        `https://cryptostocks.herokuapp.com/api/${token}/usd_chart`
      );
      const res = await response.json();
      if (res.USD) {
        setUSDChart(res.USD);
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const usd = 'EUR/USD';

  return (
    <div className="USD-Chart">
      <Plot
        data={[
          {
            x: USDChart[0],
            y: USDChart[1],
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'lightgreen' }
          }
        ]}
        layout={{
          width: 720,
          height: 500,
          title: usd
        }}
      />
    </div>
  );
};

export default UsdChart;
