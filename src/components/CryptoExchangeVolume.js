import React, { useEffect, useState } from 'react';
import Gemini from './Gemini';
import Coinbase from './Coinbase';
import Binance from './Binance';

const CryptoExchangeVolume = () => {
  const [gemini, SetGemini] = useState([]);
  const [binance, SetBinance] = useState([]);
  const [coinbase, SetCoinbase] = useState([]);

  useEffect(() => {
    Volume();
  }, []);

  const Volume = async () => {
    try {
      const response = await fetch(
        'https://cryptostocks.herokuapp.com/api/exchange_volume'
      );
      const res = await response.json();
      SetGemini(res.Gemini);
      SetBinance(res.Binance);
      SetCoinbase(res.Coinbase);
    } catch (error) {
      console.log(error);
    }
  };

  const GeminiVolume = gemini.map((gem) => {
    return (
      <Gemini
        fromSymbol={gem.fromSymbol}
        toSymbol={gem.toSymbol}
        volume={gem.volume}
      />
    );
  });

  const coinbaseVolume = coinbase.map((gem) => {
    return (
      <Coinbase
        fromSymbol={gem.fromSymbol}
        toSymbol={gem.toSymbol}
        volume={gem.volume}
      />
    );
  });

  const binanceVolume = binance.map((gem) => {
    return (
      <Binance
        fromSymbol={gem.fromSymbol}
        toSymbol={gem.toSymbol}
        volume={gem.volume}
      />
    );
  });

  return (
    <div className="Crypto-volume-flex">
      <div className="gemini-volume">
        <table className="gemini-table">
          <thead>
            <tr>
              <th> Gemini Volume by asset</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{GeminiVolume}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="coinbase-volume">
        <table className="coinbase-table">
          <thead>
            <tr>
              <th> Coinbase Volume by asset</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{coinbaseVolume}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="binance-volume">
        <table className="binance-table">
          <thead>
            <tr>
              <th> Binance Volume by asset</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{binanceVolume}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CryptoExchangeVolume;
