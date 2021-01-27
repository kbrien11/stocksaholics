import React, { useState, useEffect } from 'react';
import Trades from './HomeTrades';

const HomeHistory = () => {
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    TradeHistory();
  }, []);

  const TradeHistory = async () => {
    try {
      const response = await fetch(
        `https://cryptostocks.herokuapp.com/api/${token}/recent`
      );
      const res = await response.json();
      setTrades(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const limit_trades = trades.map((trade) => {
    return (
      <Trades
        datas={trade}
        numberShares={trade['number_shares']}
        ticker={trade['ticker']}
        equity={trade['equity']}
        tradeAction={trade['trade_type']}
        date={trade['unix_time']}
      />
    );
  });
  return (
    <div>
      {limit_trades.length > 0 && (
        <table className="content-table-transactions">
          <thead>
            <tr>
              <th> Recent Transactions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{limit_trades}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HomeHistory;
