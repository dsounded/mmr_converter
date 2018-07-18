import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import './index.css';
import DogReducer from './reducers/dog_reducer'
import MMRReducer from './reducers/mmr_reducer'

import createSagaMiddleware from 'redux-saga';

import fetcher from './requests/fetch_dogs';

import App from './containers/app';

<div id="root"></div>

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  dogs: DogReducer,
  mmr: MMRReducer
});

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
