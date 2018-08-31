import React, {Component} from 'react';

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrementCounter = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });

    this.setState({
      counter: this.state.counter - 30,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCounter}>INCREMENT +</button>
        <p>{this.state.counter}</p>
        <button onClick={this.decrementCounter}>DECREMENT -</button>
      </div>
    );
  }
}
