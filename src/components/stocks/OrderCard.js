import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function OrderCard(props) {
  const [amount, setAmount] = useState(0);

  const stock =
    props.stock &&
    props.stock.current_price &&
    props.stock.current_price.length > 0
      ? props.stock.current_price
      : [];
  return (
    <div className="order-card">
      <div className="order-card-header">
        <div>
          {stock && stock.length > 1 && stock[1] ? `Buy ${stock[1]}` : ''}
        </div>
        <FontAwesomeIcon
          className="order-card-chevron"
          icon={faChevronDown}
          onClick={props.displayOrderOptions}
        />
      </div>
      <div className="order-card-options">
        <div className="order-card-invest">
          <label className="order-card-label">Invest In</label>
          <div className="order-card-invest-radios">
            <input type="radio" name="dollars" value="dollars" />
            <label for="dollars">Dollars</label>
            <input type="radio" name="shares" value="shares" />
            <label for="shares">Shares</label>
          </div>
          <div className="order-card-amount">
            <label for="amount" className="order-card-label">
              Amount
            </label>
            <input name="amount" value={amount} />
          </div>
        </div>
      </div>
      <div className="order-card-purchase"></div>
    </div>
  );
}

export default OrderCard;
