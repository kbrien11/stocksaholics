import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const HomeEquityChart = () => {
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');
  const [chart, setChart] = useState([]);

  useEffect(() => {
    Chart();
  }, []);

  const Chart = async () => {
    try {
      const response = await fetch(
        `https://cryptostocks.herokuapp.com/api/equity_chart/${token}`
      );
      const res = await response.json();
      if (res) {
        setChart(res);
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(chart);

  const prices = chart.map((i) => {
    return i['unix_time'];
  });

  const amounts = chart.map((i) => {
    return i['equity'];
  });

  const equityTitleForChart = 'Equity over time';

  return (
    <div className="USD-Chart">
      <Plot
        data={[
          {
            x: prices,
            y: amounts,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'lightgreen' }
          }
        ]}
        layout={{
          width: 800,
          height: 500,
          title: equityTitleForChart
        }}
      />
    </div>
  );
};

export default HomeEquityChart;
