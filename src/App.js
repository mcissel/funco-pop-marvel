import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import rootReducer from './redux/rootReducer'

import Home from './components/Home';
import AuctionPage from './components/AuctionPage';
import './App.css';

const history = createBrowserHistory();
const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/auction/:id" exact strict={false} component={AuctionPage} />
            <Route component={Home} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
