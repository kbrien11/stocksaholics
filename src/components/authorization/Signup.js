import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

function SignUp() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputFirst_name, setFirstName] = useState('');
  const [inputLast_name, setLastName] = useState('');

  const sendData = async () => {
    const endpoint = 'http://localhost:5000/api/create';
    const data = {
      email: inputEmail,
      password: inputPassword,
      first_name: inputFirst_name,
      last_name: inputLast_name
    };
    const configs = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    const response = await fetch(endpoint, configs);
    const res = await response.json();
    console.log(res);
  };

  return (
    <div className="registerimage">
      <div className="register-container"></div>
      <div className="register">
        <h3> Register</h3>
        <label for="first"> First Name</label> <br />
        <input
          type="text"
          id="first"
          placeholder=" John"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label for="last"> Last Name</label> <br />
        <input
          type="text"
          id="last"
          placeholder=" Doe"
          onChange={(e) => setLastName(e.target.value)}
        />{' '}
        <br />
        <label for="email"> Email</label> <br />
        <input
          type="text"
          id="email"
          placeholder=" John.Doe@gmail.com"
          onChange={(e) => setInputEmail(e.target.value)}
        />{' '}
        <br />
        <label for="pass"> Password</label> <br />
        <input
          type="password"
          id="pass"
          placeholder=" xxxxxxxx"
          onChange={(e) => setInputPassword(e.target.value)}
        />{' '}
        <br />
        <button onClick={(e) => sendData()}> Register</button> <br />
        <p> Already have an account?</p>
        <a link href="login" as={RouterLink}>
          {' '}
          Log in Here
        </a>
      </div>
    </div>
  );
}
export default SignUp;
