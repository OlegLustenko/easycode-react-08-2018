import React, {Component} from 'react';

class DangerButtonComponent extends Component {
  render() {
    console.log(this.props);
    return (
      <button className='danger-button' ref={this.props.forwardRef}>
        Click me ! ! !
      </button>
    );
  }
}

export const DangerButton = React.forwardRef((props, forwardRef) => {
  return <DangerButtonComponent {...props} forwardRef={forwardRef}/>;
});

export default DangerButton;