const createStore = (reducer) => {
  let state;
  let listeners = []; // view

  const getState = () => state;
  const subscribe = (listener) => {
    listeners.push(listener);
  };

  const dispatch = (action) => {
    const newState = reducer(state, action);

    if (newState !== state) {
      state = newState;
      listeners.forEach((listener) => {
        listener();
      });
    }
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
};

const reducer = (state = {counter: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return state.counter + 1
    }
    case 'DECREMENT': {
      return {
        counter: state.counter - 1,
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

const incButton = document.getElementById('inc');
const decButton = document.getElementById('dec');

incButton.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'});
});

decButton.addEventListener('click', () => {
  store.dispatch({type: 'DECREMENT'});
});

const counter = document.getElementById('counter');

function updateCounter() {
  counter.innerHTML = store.getState().counter;
}

store.subscribe(updateCounter);




