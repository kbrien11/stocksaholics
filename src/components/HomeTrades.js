import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';

const Trades = ({ numberShares, ticker, equity, tradeAction, date }) => {
  const arrowUp = <FaArrowUp />;
  return (
<<<<<<< HEAD
    <div class='trade-home'>
=======
    <div className="trade-home">
>>>>>>> abac3e5d5b30ee6661144c959cbe87bc5130c270
      <div>
        {tradeAction === 'Market Deposit' ? (
          <h1>
            <FaArrowUp className='home-trade-buy' />
            <span>Bought {ticker}</span>{' '}
          </h1>
        ) : (
          <h1>
            <FaArrowDown className='home-trade-sell' />{' '}
            <span>Sold {ticker}</span>{' '}
          </h1>
        )}
      </div>
      <div className='home-trade-transaction'>
        <p>
          {equity} worth of {ticker} on {date}
        </p>
      </div>
      {/* <div className='home-trade-date'>{date}</div> */}
    </div>
  );
};
export default Trades;
