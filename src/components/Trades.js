import React, { useState } from 'react';

const Trades = ({ trade_type, ticker, number_shares, unix_time, equity }) => {
  return (
    <div className="trade-content">
      <div class="tradeequity">
        <h3>
          {trade_type === 'Market Deposit' ? (
            <div className="trades-buy">{'+' + '$' + equity}</div>
          ) : (
            <div className="trades-sell"> {'-' + '$' + equity}</div>
          )}
        </h3>

        <p>{number_shares} Shares</p>
      </div>
      <div class="trades">
        <h3>{ticker}</h3>
        <p> {unix_time}</p>
      </div>
    </div>
  );
};
export default Trades;
