import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Accordion } from '../../components/common';
import StockHeadline from './StockHeadline';
import StockChart from './StockChart';
import StockPurchaseCard from './StockPurchaseCard';
import BaseService from '../../services/BaseService';

const StockPage = (props) => {
  const [stock, setStock] = useState(null);
  const [displayError, setDisplayError] = useState(false); // Todo add error handling
  const [content, setContent] = useState();
  const { ticker } = useParams();

  useEffect(() => {
    async function getStockInfo() {
      try {
        const stock = await BaseService.GET(`price/${ticker}`);
        if (stock) {
          console.log(stock);
          setStock(stock);
        } else {
          setDisplayError(true);
        }
      } catch (error) {
        setDisplayError(true);
      }
    }
    getStockInfo();
  }, [ticker]);

  return (
    <div className="stock-page-container">
      <div className="stock-headline-container">
        <StockHeadline stock={stock} />
      </div>
      <div className="stock-section-1">
        {stock && <StockChart stock={stock} />}
        <div className="stock-accordion">
          <StockPurchaseCard />
        </div>
      </div>
      <div className="stock-section-2">
        <div className="stock-accordion">
          <Accordion title={'Accordion Test'} content={content} />
        </div>
      </div>
      <div className="stock-section-3">
        <div className="stock-news"></div>
        <div className="stock-about"></div>
      </div>
      <div className="stock-section-4">
        <div className="stock-sec-filings"></div>
      </div>
    </div>
  );
};

export default StockPage;
