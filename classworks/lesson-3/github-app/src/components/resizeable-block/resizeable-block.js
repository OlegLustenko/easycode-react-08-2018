import React, {Component} from 'react';

const blockStyle = {
  height: '600px',
  width: '600px',
  backgroundColor: 'yellow',
};

const resizedStyle = {
  height: '300px',
  width: '300px',
  backgroundColor: 'blue',
};

class ResizeableBlock extends Component {
  constructor() {
    super();
    this.state = {
      style: blockStyle,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', (event) => {
      if (window.innerWidth < 400) {
        this.setState({
          style: resizedStyle,
        });
        return;
      }

      this.setState({
        style: blockStyle,
      });
    });
  }

  componentWillUnmount() {
    console.log('componen will unmount');
  }

  render() {
    return (
      <div style={this.state.style}>

      </div>
    );
  }
}

export default ResizeableBlock;