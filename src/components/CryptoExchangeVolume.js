<<<<<<< HEAD
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
      const response = await fetch('http://127.0.0.1:5000/api/exchange_volume');
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

  const geminiImage = '//logo.clearbit.com/gemini.com';
  const binanceImage = '//logo.clearbit.com/binance.com';
  const coinbaseImage = '//logo.clearbit.com/coinbase.com';

  return (
    <div className="Crypto-volume-flex">
      <div className="gemini-volume">
        <table className="gemini-table">
          <thead>
            <tr>
              <th>
                {' '}
                Gemini Volume by asset{' '}
                <span>
                  {' '}
                  <img
                    className="crypto-volume-image"
                    src={geminiImage}
                    width={30}
                    height={30}
                  />
                </span>
              </th>
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
              <th>
                {' '}
                Coinbase Volume by asset{' '}
                <span>
                  {' '}
                  <img
                    className="crypto-volume-image"
                    src={coinbaseImage}
                    width={30}
                    height={30}
                  />
                </span>
              </th>
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
              <th>
                {' '}
                Binance Volume by asset{' '}
                <span>
                  {' '}
                  <img
                    className="crypto-volume-image"
                    src={binanceImage}
                    width={30}
                    height={30}
                  />
                </span>
              </th>
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
=======
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
      const response = await fetch('http://127.0.0.1:5000/api/exchange_volume');
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
>>>>>>> abac3e5d5b30ee6661144c959cbe87bc5130c270
