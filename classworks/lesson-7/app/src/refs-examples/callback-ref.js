import React, {Component} from 'react';

class CallbackRef extends Component {
  componentDidMount() {
    if(this.inputRef) {
      this.inputRef.focus();
    }
  }

  render() {
    return (
      <input
        type="text"
        ref={(ref) => {
          this.inputRef = ref;
        }}
      />
    );
  }
}

export default CallbackRef;
