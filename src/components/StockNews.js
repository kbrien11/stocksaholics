import React, { useEffect, useState } from 'react';

const StockNews = ({ ticker }) => {
  useEffect(() => {
    getNews();
  }, []);

  const [news, setNews] = useState([]);
  const [token, setToken] = useState(sessionStorage.getItem('token'));

  const getNews = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/stock_news/${token}/aapl`
      );
      const res = await response.json();
      setNews(res.news);
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(news);

  return <div>{news.headline}</div>;
};
export default StockNews;
