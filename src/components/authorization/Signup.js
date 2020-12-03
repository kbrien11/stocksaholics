import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <h3>Register</h3>
        <label>First Name</label> <br />
        <input
          type="text"
          placeholder="John"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label>Last Name</label> <br />
        <input
          type="text"
          placeholder="Doe"
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label> Email</label> <br />
        <input
          type="email"
          placeholder="John.Doe@gmail.com"
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <br />
        <label>Password</label> <br />
        <input
          type="password"
          placeholder="xxxxxxxx"
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <br />
        <button onClick={(e) => sendData()}> Register</button> <br />
        <p> Already have an account?</p>
        <Link to="/login">Log in Here</Link>
      </div>
    </div>
  );
}

export default SignUp;
