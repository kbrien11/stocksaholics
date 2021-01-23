import React, { useState, useEffect } from 'react';
import CryptoNewsData from './CryptoNewsData';

const CryptoNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    News();
  }, []);

  const News = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/crypto_news');
      const res = await response.json();
      setNews(res.cryptoNews);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(news);

  const names = news.map((article) => {
    return (
      <CryptoNewsData
        key={article.id}
        title={article.title}
        url={article.url}
        img={article.imageurl}
        body={article.body}
      />
    );
  });

  return (
    <div>
      <table className="content-table-articles">
        <thead>
          <tr>
            <th> Recent Articles</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{names}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CryptoNews;
