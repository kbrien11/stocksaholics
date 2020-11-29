import React from 'react';
import { Login, Signup } from './components/authorization';
import { About, Crypto, History, Home, Portfolio, Stocks } from './components';
import { BrowserRouter, Route } from 'react-router-dom';
import { LandingPage } from './components/landingPage';
import './styles/app.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
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
