import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Home from '../Home';

const Login = (props) => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [token, setToken] = useState(false);

  const history = useHistory();

  const signin = async () => {
    setIsError(false);
    setToken('');
    const endpoint = 'http://127.0.0.1:5000/api/log';
    const data = {
      email: inputEmail,
      password: inputPassword
    };
    const configs = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    const response = await fetch(endpoint, configs);
    const res = await response.json();
    if (res.token) {
      sessionStorage.setItem('token', res.token);
      setToken(res.token);
      props.handleLogin();
      history.push('/home');
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="login-split-right">
      <div className="loginwrapper">
        <div className="login-name">
          <span className="loginwrapper-h1"> Stocks</span>aholics
        </div>
      </div>
      {token ? (
        <Home />
      ) : (
        <div className="login">
          <h3> Login</h3>
          {isError && <h5> Incorrect Email or password, please try again</h5>}
          <label>Email</label> <br />
          <input
            type="email"
            placeholder="John.Doe@gmail.com"
            onChange={(e) => setInputEmail(e.target.value)}
          />
          <br />
          <label>Password</label> <br />
          <input
            type="password"
            placeholder="xxxxxxxxxxxxxx"
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <br />
          <div></div>
          <button onClick={(e) => signin()}> Login</button> <br />
        </div>
      )}
    </div>
  );
};

export default Login;
