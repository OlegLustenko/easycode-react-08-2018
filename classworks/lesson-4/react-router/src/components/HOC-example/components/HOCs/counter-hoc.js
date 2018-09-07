import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Counter} from '../../../ways-of-composition/render-props';

export const CounterHOC = WrappedComponent => {
  return class CounterHOCClass extends React.Component {
    constructor(props) {
      super(props);
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
      this.setState(prevState => ({
        counter: prevState.counter - 1,
      }));
    };

    render() {
      console.log(this.props);
      return (
        <div>
          <React.Fragment>
            <Link to="/user-name">show User Name</Link>
            <button onClick={this.incrementCounter}>INCREMENT</button>
            <WrappedComponent {...this.props} />
            {this.state.counter}
            <button onClick={this.decrementCounter}>DECREMENT</button>
            <button onClick={(event) => {
              event.preventDefault();
              this.props.history.push('/404');
            }}>NAVIGATE TO 404
            </button>
          </React.Fragment>
        </div>
      );
    }
  };
};


