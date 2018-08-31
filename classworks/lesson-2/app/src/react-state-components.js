import React, {Component} from 'react';

export class InputComponent extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
    };
  }

  inputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    return (
      <div>
        INPUT
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.inputChange}
        />
      </div>
    );
  }
}
