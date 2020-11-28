import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Stocks from './components/Stocks';
import Crypto from './components/Crypto';
import History from './components/History';
import About from './components/About';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/app.scss';
import Landing from './components/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/stocks" component={Stocks} />
        <Route exact path="/about" component={About} />
        <Route exact path="/crypto" component={Crypto} />
        <Route exact path="/history" component={History} />
      </div>
    </BrowserRouter>
  );
}

export default App;
