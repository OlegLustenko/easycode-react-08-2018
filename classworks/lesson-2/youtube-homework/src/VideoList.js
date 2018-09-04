import React, {Component} from 'react';

export class VideoTitle extends Component {
  render() {
    if (!this.props.video) {
      return <div>Loading...</div>;
    }

    return (
      <div style={{color: 'blue'}}>
        {this.props.video[0].title}
      </div>
    );
  }
}

export default VideoTitle;