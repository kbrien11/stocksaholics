import React, { useState, useEffect } from 'react';

const Pos = ({ ticker, numberShares, equity }) => {
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');
  const [image, setImage] = useState('');

  useEffect(() => {
    companyLogo();
  }, []);

  const companyLogo = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/logo/${ticker}`);
      const res = await response.json();
      if (res.logo) {
        setImage(res.logo);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class='position-home'>
      <div className='position-logo'>
        {image && <img src={image} width='30' height='30'></img>}
        <h2>
          <span>{ticker}</span>
        </h2>
      </div>
      <div className='position-equity'>
        <h5> Total Equity: {'$' + equity}</h5>
        <p> {numberShares} Total Share(s)</p>
      </div>
      {/* <div className='position-shares'>
        <p> {numberShares} Total Share(s)</p>
      </div> */}
    </div>
  );
};
export default Pos;
