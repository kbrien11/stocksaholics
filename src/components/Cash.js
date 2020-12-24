import React, { useEffect, useState } from 'react';

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
        `http://127.0.0.1:5000/api/${token}/balance`
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
    const endpoint = `http://localhost:5000/api/${token}/${inputAmount}`;
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
      <div className="deposit">
        <p> Would you like to deposit money into your account?</p>
        <input
          placeholder="amount"
          type="text"
          value={inputAmount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="button" onClick={(e) => Deposit()}>
          {' '}
          Increase
        </button>
        {inputdeposit && <p> successfully addded!</p>}
      </div>
      <div className="homebalance">
        <h2> USD Balance</h2>
        <hr color="black"></hr>
        <p>{'$' + dataBalance}</p>
      </div>
    </div>
  );
};
export default Cash;
