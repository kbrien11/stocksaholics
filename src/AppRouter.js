import React, { useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Login, Signup } from './components/authorization';
import {
  About,
  Crypto,
  History,
  Home,
  Navbar,
  Portfolio,
  Stocks
} from './components';
import { LandingPage } from './components/landingPage';

function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/login"
          component={() => <Login handleLogin={handleLogin} />}
        />
        {(isLoggedIn || !!sessionStorage.getItem('token')) && (
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/stocks" component={Stocks} />
              <Route exact path="/crypto" component={Crypto} />
              <Route exact path="/history" component={History} />
            </Switch>
          </div>
        )}
        {/* Displays Login as a fallback */}
        <Route
          exact
          path="/login"
          component={() => <Login handleLogin={handleLogin} />}
        />
      </Switch>
    </div>
  );
}

export default withRouter(AppRouter);
