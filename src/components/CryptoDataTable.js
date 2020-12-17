import React from 'react';

const CryptoDataTable = (props) => {
  console.log(props);
  return (
    <div>
      <h2> Name: {props.name}</h2> <br />
      <p> Rating: {props.rating}</p> <br />
      <p> Score: {props.score}</p> <br />
      <p> Market Rating: {props.market}</p> <br />
    </div>
  );
};

export default CryptoDataTable;
