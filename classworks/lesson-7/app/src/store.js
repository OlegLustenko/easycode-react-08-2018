import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import {reducer} from './reducer';

const logMiddleware = (store) => (next) => (action) => {
  console.log('PREV STATE: ', store.getState());
  console.log('ACTION', action);
  next(action);
  console.log('CURRENT STATE: ', store.getState());
};

const asyncActionMiddleware = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  } else {
    next(action);
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

/*
* createStore
* reducer:Function
* Middlewares || initialState
* Middlewares
*
* */
export const store = createStore(
  reducer,
  {
    counter: {
      counter: 500
    }
  },
  composeEnhancers(applyMiddleware(logMiddleware, ReduxThunk))
);
