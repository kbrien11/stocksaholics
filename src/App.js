import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/app.scss';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
