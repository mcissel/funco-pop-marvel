import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom'

import { createBrowserHistory } from 'history'

import Home from './components/Home';
import AuctionPage from './components/AuctionPage';
import './App.css';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/auction/:id" exact strict={false} component={AuctionPage} />
          <Route component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
