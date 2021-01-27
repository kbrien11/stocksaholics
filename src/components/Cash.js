import React, { useEffect, useState } from 'react';
import StripeCheckoutButton from './StripeButton';
import { FaRocket, FaMoneyBill } from 'react-icons/fa';

const Cash = () => {
  const [balance, setBalance] = useState([]);
  const [inputdeposit, setDeposit] = useState(false);
  const [inputAmount, setAmount] = useState('');
  const [token, setToken] = useState(sessionStorage.getItem('token'));

  useEffect(() => {
    Balance();
  }, []);

  const Balance = async () => {
    try {
      const response = await fetch(
        `https://cryptostocks.herokuapp.com/api/${token}/balance`
      );
      const res = await response.json();
      setBalance(res.balance);
    } catch (error) {
      console.log(error);
    }
  };

  const clear = () => {
    setAmount('');
  };

  const Deposit = async () => {
    setDeposit(false);
    const endpoint = `https://cryptostocks.herokuapp.com/api/${token}/${inputAmount}`;
    const data = {
      amount: inputAmount
    };
    const configs = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    const response = await fetch(endpoint, configs);
    const res = await response.json();
    clear();
    Balance();
    console.log(res.token);
    setDeposit(true);
  };

  const dataBalance = balance.toLocaleString();

  return (
    <div>
      {/* <div className="card">
        <div className="deposit-container">
          <p> Transfer</p>
          <hr></hr>
          <h3>
            {' '}
            Amount{' '}
            <span>
              {' '}
              <input
                placeholder="amount"
                type="text"
                value={inputAmount}
                onChange={(e) => setAmount(e.target.value)}
              />{' '}
            </span>{' '}
          </h3>
          <button type="button" onClick={(e) => Deposit()}>
            {' '}
            Instant Transfer
          </button>{' '}
          <span>
            {' '}
            <StripeCheckoutButton price={inputAmount} />
          </span>
          {inputdeposit && <p> successfully addded!</p>}
        </div>
      </div> */}

      <div className="deposit-container">
        <table className="deposit-table">
          <thead>
            <tr>
              <th>
                {' '}
                Transfer{' '}
                <span>
                  {' '}
                  <FaMoneyBill />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {' '}
                <h3>
                  {' '}
                  Amount{' '}
                  <span>
                    {' '}
                    <input
                      placeholder="amount"
                      type="text"
                      value={inputAmount}
                      onChange={(e) => setAmount(e.target.value)}
                    />{' '}
                  </span>{' '}
                </h3>
              </td>
            </tr>
          </tbody>
          <button type="button" onClick={(e) => Deposit()}>
            {' '}
            Instant Transfer
          </button>{' '}
          <span>
            {' '}
            <StripeCheckoutButton price={inputAmount} />
          </span>
        </table>
      </div>

      {inputdeposit && (
        <div className="deposit-success">
          <p>
            {' '}
            successfully addded!{' '}
            <span>
              {' '}
              <FaRocket />{' '}
            </span>
          </p>
        </div>
      )}

      <div className="homebalance">
        <h2> USD Balance</h2>
        <hr color="black"></hr>
        <p>{'$' + dataBalance}</p>
      </div>
    </div>
  );
};
export default Cash;
