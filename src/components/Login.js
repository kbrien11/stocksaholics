import React, { useState } from 'react';
import Home from './Home';
import { useHistory } from 'react-router-dom';

const Login = () => {
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
    console.log(res.token);
    sessionStorage.setItem('token', res.token);
    setToken(res.token);
    setIsError(true);
    if (res.token) {
      history.push('/home');
    }
  };

  return (
    <div className='login-split-right'>
      <div className='loginwrapper'>
        <div className='login-name'>
          <span className='loginwrapper-h1'> Stocks</span>aholics
        </div>
      </div>
      {token ? (
        <Home />
      ) : (
        <div className='login'>
          <h3> Login</h3>
          {isError && <h5> Incorrect Email or password, please try again</h5>}
          <label for='email'> Email</label> <br />
          <input
            type='text'
            id='email'
            placeholder=' John.Doe@gmail.com'
            onChange={(e) => setInputEmail(e.target.value)}
          />{' '}
          <br />
          <label for='pass'> Password</label> <br />
          <input
            type='password'
            id='pass'
            placeholder=' xxxxxxxxxxxxxx'
            onChange={(e) => setInputPassword(e.target.value)}
          />{' '}
          <br />
          <div></div>
          <button onClick={(e) => signin()}> Login</button> <br />
          {/* <img src = "https://www.romania-insider.com/sites/default/files/styles/article_large_image/public/2020-04/remote_working_laptop_-_photo_pattanaphong_khuankaew_-_dreamstime.com_.jpg"  /> */}
        </div>
      )}
    </div>
  );
};
export default Login;
