import React from 'react';
import Plot from 'react-plotly.js';

const StockChart = (props) => {
  return (
    <div className="stock-chart">
      <Plot
        data={[
          {
            x: props.stock && props.stock.chartData && props.stock.chartData[0],
            y: props.stock && props.stock.chartData && props.stock.chartData[1],
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: '#2ecc71' }
          }
        ]}
        layout={{
          width: 760,
          height: 500
        }}
      />
    </div>
  );
};

export default StockChart;
