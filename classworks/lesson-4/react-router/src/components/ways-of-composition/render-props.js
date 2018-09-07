import React, {Component} from 'react';

export class Counter extends Component {

  static defaultProps = {
    initialStateOfCounter: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      counter: props.initialStateOfCounter,
    };
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1,
    }));
  };

  render() {
    return this.props.children({
      incrementCounter: this.incrementCounter,
      decrementCounter: this.decrementCounter,
      counter: this.state.counter,
    });
  }
}
