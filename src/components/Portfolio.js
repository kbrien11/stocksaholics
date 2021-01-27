import React, { useState, useEffect } from 'react';
import Pos from './Position';
import Plot from 'react-plotly.js';
import StockNews from './StockNews';
import { FaChartPie, FaChartBar } from 'react-icons/fa';

const Portfolio = () => {
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');
  const [positions, setPositions] = useState([]);
  const [graphPositions, setGraphPositions] = useState([]);
  const [datas, setDatas] = useState([]);
  const [datass, setDatass] = useState([]);
  const [total, setTotal] = useState(0);
  const [equity, setEquity] = useState(false);
  const [graph, setGraph] = useState(false);
  const [bar, setBar] = useState(false);

  useEffect(() => {
    Positions();
  }, []);
  useEffect(() => {
    Total();
  }, []);

  const Positions = async () => {
    setBar();
    setGraph();
    try {
      const response = await fetch(
        `https://cryptostocks.herokuapp.com/api/${token}/positions`
      );
      const res = await response.json();
      setPositions(res);
      setGraphPositions(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const Total = async () => {
    try {
      const response = await fetch(
        `https://stocksandcrypto.herokuapp.com/api/total_shares/${token}`
      );
      const res = await response.json();
      setTotal(res.total);
      console.log(res.total);
    } catch (error) {
      console.log(error);
    }
  };

  const current_positions = positions.map((position) => {
    return (
      <Pos
        position={position}
        ticker={position.ticker}
        numberShares={position.number_shares}
        equity={position.equity}
      />
    );
  });

  console.log(current_positions);

  const news = positions.map((i) => {
    return <StockNews ticker={i[0]} />;
  });

  const setGraphOn = () => {
    setGraph(true);
  };
  const setGraphOff = () => {
    setGraph();
  };

  const setBarOn = () => {
    setBar(true);
  };
  const setBarOff = () => {
    setBar();
  };

  const tickers =
    graphPositions &&
    graphPositions.length > 0 &&
    graphPositions.map((position) => position.ticker);

  const values =
    graphPositions &&
    graphPositions.length > 0 &&
    graphPositions.map((position) => position.equity);

  console.log(tickers);

  console.log(total);

  return (
    <div>
      {graph && (
        <button className="position-list-button" onClick={(e) => setGraphOff()}>
          List
        </button>
      )}
      <div className="position-graph">
        {graph && (
          <Plot
            data={[
              {
                values: values,
                labels: tickers,
                type: 'pie'
              }
            ]}
            layout={{
              width: 400,
              height: 280
            }}
          />
        )}
      </div>
      {bar && (
        <button className="position-list-button" onClick={(e) => setBarOff()}>
          List
        </button>
      )}
      <div className="position-graph">
        {bar && (
          <Plot
            data={[
              {
                x: tickers,
                y: values,
                type: 'bar'
              }
            ]}
            layout={{
              width: 400,
              height: 280
            }}
          />
        )}
      </div>

      {!graph && !bar && current_positions.length > 0 && (
        <table className="content-table">
          <thead>
            <tr>
              <th>
                Positions
                <span>
                  <button onClick={(e) => setGraphOn()}>
                    <FaChartPie />
                  </button>
                  <button onClick={(e) => setBarOn()}>
                    <FaChartBar />
                  </button>
                  <br />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{current_positions}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Portfolio;
