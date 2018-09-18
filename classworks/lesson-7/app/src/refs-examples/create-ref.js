import React, {Component} from 'react';

class CreateRef extends Component {
  myRef = React.createRef();

  componentDidMount() {
    if(this.myRef) {
      this.myRef.current.focus();
    }
  }

  render() {
    return (
      <input type="text" ref={this.myRef}/>
    );
  }
}

export default CreateRef;