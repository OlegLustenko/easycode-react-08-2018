import {combineReducers} from 'redux';

const initialState = {counter: 0};
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    }
    case 'ASYNC_INCREMENT': {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const reducer = combineReducers({
  counter: counterReducer,
});