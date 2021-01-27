import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';

const Trades = ({ numberShares, ticker, equity, tradeAction, date }) => {
  const arrowUp = <FaArrowUp />;
  return (
    <div class="trade-home">
      <div>
        {tradeAction === 'Market Deposit' ? (
          <h1>
            <FaArrowUp className="home-trade-buy" />
            <span>Bought {ticker}</span>{' '}
          </h1>
        ) : (
          <h1>
            <FaArrowDown className="home-trade-sell" />{' '}
            <span>Sold {ticker}</span>{' '}
          </h1>
        )}
      </div>
      <div className="home-trade-transaction">
        <p>
          {equity} worth of {ticker} on {date}
        </p>
      </div>
      {/* <div className='home-trade-date'>{date}</div> */}
    </div>
  );
};
export default Trades;
