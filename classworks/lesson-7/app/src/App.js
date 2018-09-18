import React, {Component} from 'react';
import {connect} from 'react-redux';

import {incrementCounter, incrementAsyncCounter} from './actions';

export class AppComponent extends Component {
  /*
  *
  *
  * INCREMENT
  *
  * чтобы увеличивали counter
  *
  * DECREMENT
  *
  *
  * */

  createIncrementor = (value) => () => {
    return this.props.incrementCounter(value);
  };

  createIncrementorAsync = (value) => () => {
    return this.props.incrementAsyncCounter(value);
  };

  render() {
    const {counter} = this.props;

    return (
      <div>
        <div>
          <h3>SYNC</h3>
          <button onClick={this.createIncrementor(1)}>INCREMENT</button>
          <div>counter state: {counter}</div>
          <button onClick={this.createIncrementor(-1)}>DECREMENT</button>
        </div>
        <hr/>
        <div>
          <h3>ASYNC</h3>
          <button onClick={this.createIncrementorAsync(1)}>ASYNC INCREMENT</button>
          <div>counter state ASYNC: {counter}</div>
          <button onClick={this.createIncrementorAsync(-1)}>ASYNC DECREMENT</button>
        </div>
      </div>
    );
  }
}

const selectCounter = (state) => {
  return state.counter.counter; // Perf React ? Perf React-Redux ?? React -> Unit tests
};

const mapStateToProps = (state) => {
  return {
    counter: selectCounter(state),
  };
};

const mapDispatchToProps = {
  incrementCounter,
  incrementAsyncCounter,
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);




// Authenticate with Redux in COOK -> BOOK
// Локальное добавление рецептов и ингридиентов
