import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BaseService from '../../services/BaseService';
import StockCard from './StockCard';

const StockPage = (props) => {
  const [stock, setStock] = useState(null);
  const [displayError, setDisplayError] = useState(false);
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
    <div>
      <StockCard stock={stock} />
    </div>
  );
};

export default StockPage;
