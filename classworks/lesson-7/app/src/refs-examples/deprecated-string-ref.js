import React, {Component} from 'react';

class DeprecatedStringRef extends Component {
  componentDidMount() {
    console.log(this.refs);
    if (this.refs.inputRef) {
      this.refs.inputRef.focus();
    }
  }

  render() {
    return (
      <input type="text" ref='inputRef'/>
    );
  }
}

export default DeprecatedStringRef;