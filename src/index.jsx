import React from 'react';
import devTools from 'remote-redux-devtools';
import { Provider, Platform } from 'react-redux';
import { createStore, compose } from 'redux';
import App from './App';


import rootReducer from './reducers';

const store = createStore(rootReducer, compose(devTools({
  name: Platform,
  hostname: 'localhost',
  port: 5678,
})));

const TabeRandomApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default TabeRandomApp;
