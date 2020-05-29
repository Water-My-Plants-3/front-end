import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(thunk, logger));


ReactDOM.render(
  <Provider store ={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);