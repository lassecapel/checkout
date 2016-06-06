/*
* Bol.com
* @flow
*/

'use strict';

import {applyMiddleware, createStore} from 'redux';
import reducers from '../reducers';
import createLogger from 'redux-logger';

const isDebuggingInChrome = !!window.navigator.userAgent;
const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

const createCheckoutStore = applyMiddleware(logger)(createStore);

function configureStore() {
  const store = createCheckoutStore(reducers);
  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}

export default configureStore;
