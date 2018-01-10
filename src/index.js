import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import reducer from './reducers'

import createSagaMiddleware from 'redux-saga';

import fetcher from './requests/fetch_dogs';

import App from './containers/app';

<div id="root"></div>

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(fetcher);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
