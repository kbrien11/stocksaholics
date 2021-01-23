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
        `http://127.0.0.1:5000/api/${token}/positions`
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
        `http://127.0.0.1:5000/api/total_shares/${token}`
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
<<<<<<< HEAD
        key={position.pk}
=======
        key={position[0]}
>>>>>>> abac3e5d5b30ee6661144c959cbe87bc5130c270
        position={position}
        ticker={position.ticker}
        numberShares={position.number_shares}
        equity={position.equity}
      />
    );
  });

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
<<<<<<< HEAD
    graphPositions.map((position) => position.ticker);
=======
    graphPositions.map((position) => position[0]);
>>>>>>> abac3e5d5b30ee6661144c959cbe87bc5130c270

  const values =
    graphPositions &&
    graphPositions.length > 0 &&
<<<<<<< HEAD
    graphPositions.map((position) => position.equity);
=======
    graphPositions.map((position) => position[2]);
>>>>>>> abac3e5d5b30ee6661144c959cbe87bc5130c270

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
