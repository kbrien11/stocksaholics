import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function OrderCard(props) {
  const [amount, setAmount] = useState('');
  const [estimatedQuantity, setEstimatedQuantity] = useState(0);
  const [investInOption, setInvestInOption] = useState('');

  const stock =
    props.stock &&
    props.stock.current_price &&
    props.stock.current_price.length > 0
      ? props.stock.current_price
      : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const handleAmountChange = (e) => {
    let amt = e.target.value;
    const numberRegEx = /^[0-9. ]+$/;
    if (amt.match(numberRegEx)) {
      amt = parseFloat(amt);
      setEstimatedQuantity(amt * stock[2]);
      setAmount(amt);
    } else if (amt === '') {
      setEstimatedQuantity(0);
      setAmount(amt);
    }
  };

  const handleAmountBlur = (e) => {
    let amt = e.target.value;
    if (amt.trim()) {
      setAmount(parseFloat(amt).toFixed(2));
    }
  };

  const handleInvestRadioChange = (e) => {
    setInvestInOption(e.target.value);
  };

  return (
    <form className="order-card" onSubmit={handleSubmit}>
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
            <input
              type="radio"
              name="Dollars"
              value="Dollars"
              checked={investInOption === 'Dollars'}
              onChange={handleInvestRadioChange}
            />
            <label>Dollars</label>
            <input
              type="radio"
              name="Shares"
              value="Shares"
              checked={investInOption === 'Shares'}
              onChange={handleInvestRadioChange}
            />
            <label>Shares</label>
          </div>
          <div className="order-card-amount">
            <label className="order-card-label">Amount</label>
            <div className="order-card-amount-numberbox">
              <span className="numberbox-dollar-symbol">$</span>
              <input
                name="amount"
                placeholder="$0.00"
                value={amount || ''}
                onChange={handleAmountChange}
                onBlur={handleAmountBlur}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="order-card-purchase">
        <div className="order-card-row">
          <span className="order-card-estimate">Est. Quantity</span>
          <span className="order-card-estimate">{estimatedQuantity}</span>
        </div>
        <button className="order-card-button" type="submit">
          Review Order
        </button>
      </div>
    </form>
  );
}

export default OrderCard;
