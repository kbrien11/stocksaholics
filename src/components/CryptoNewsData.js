import React from 'react';

const CryptoNewsData = ({ title, url, img, body }) => {
  const image = `${img}`;
  const url_path = `${url}`;
  const string_length = 150;
  const trimmedBody = body.substring(0, string_length);
  console.log(url_path);
  return (
    <div className="article-flex">
      <div className="article-image">
        <img src={image} width={150} height={155} />
      </div>
      <div className="article">
        <a href={url_path} target="_blank">
          {title}{' '}
        </a>
        <p>{trimmedBody}</p>
      </div>
    </div>
  );
};

export default CryptoNewsData;
