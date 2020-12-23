import React, { useState, useEffect } from 'react';
import Pos from './Position';
import Plot from 'react-plotly.js';
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
      setPositions(res.Positions);
      setGraphPositions(res.Positions_for_graph);
      console.log(res.Positions);
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
        key={position[0]}
        position={position}
        ticker={position[0]}
        numberShares={position[1]}
        equity={position[2]}
      />
    );
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
    graphPositions.map((position) => position[0]);

  const values =
    graphPositions &&
    graphPositions.length > 0 &&
    graphPositions.map((position) => position[2]);

  console.log(tickers);

  console.log(total);

  return (
    <div>
      {graph && (
        <button className="position-list-button" onClick={(e) => setGraphOff()}>
          {' '}
          List
        </button>
      )}
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
            width: 700,
            height: 580
          }}
        />
      )}

      {bar && (
        <button className="position-list-button" onClick={(e) => setBarOff()}>
          List
        </button>
      )}
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
            width: 700,
            height: 580
          }}
        />
      )}

      {!graph && !bar && (
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
