import React, {Component} from 'react';
import {connect} from 'react-redux';

import {increment} from './actions/increment';
import {decrement} from './actions/decrement';
import {add} from './actions/add';
import './App.css';

/*
* добавьте инпут, добавьте кнопку
*
* при нажатии на кнопку, state увеличивается на число введенное
* в инпут (инпут очищается)
*
* ***** Level 2
*
* */

export class AppComponent extends Component {
  state = {
    inputValue: ''
  };

  updateInput = (event) => {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    });
  };

  clearInput() {
    this.setState({
      inputValue: ''
    });
  }

  render() {
    const {increment, decrement, counter, add} = this.props;
    const {inputValue} = this.state;
    return (
      <div className="App">
        <button
          onClick={() => {
            increment(+inputValue);
            this.clearInput();
          }}>
          INCREMENT
        </button>
        <p>counter: {counter}</p>
        <button onClick={decrement}>DECREMENT</button>
        <button
          onClick={() => {
            add(+inputValue);
            this.clearInput();
          }}>
          ADD TO STATE
        </button>
        <input
          type="text"
          onChange={this.updateInput}
          value={inputValue}
          name="inputValue"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    redux: 'is a power'
  };
};

export const App = connect(mapStateToProps, {
  increment,
  decrement,
  add
})(AppComponent);
