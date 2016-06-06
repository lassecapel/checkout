// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {rootReducer} from './reducers';
import configureStore from './store/configureStore';


ReactDOM.render(
  <Provider store = { configureStore() } >
    <App />
  </Provider>, document.getElementById('root'));
