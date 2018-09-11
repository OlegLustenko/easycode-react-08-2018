import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.css';
import {App} from './App';

const initialState = {counter: 0, happyCounter: 10};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'INCREMENT': {
      return {
        counter: state.counter + 1,
      };
    }
    case 'DECREMENT': {
      return {
        counter: state.counter - 1,
      };
    }
    case 'ADD': {
      return {
        counter: state.counter + action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'),
);
