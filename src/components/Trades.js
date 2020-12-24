import React, { useState } from 'react';

const Trades = (props) => {
  return (
    <div className="trade-content">
      <div class="tradeequity">
        <h3>
          {props.datas[5] === 'Market Deposit'
            ? '+' + '$' + props.datas[4]
            : '-' + '$' + props.datas[4]}
        </h3>

        <p>{props.datas[3]} Shares</p>
      </div>
      <div class="trades">
        <h3>
          {' '}
          <span>{props.datas[2]}</span>({props.datas[5]}){' '}
        </h3>
        <p> {props.datas[6]}</p>
      </div>
    </div>
  );
};
export default Trades;
