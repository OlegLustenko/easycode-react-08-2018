import React from 'react';

// const Avatar = props => {
//   console.log(props);
//   return (
//     <div>
//       <img src={props.src}/>
//       <h4>{props.title}</h4>
//     </div>
//   );
// };

class Avatar extends React.Component {
  static defaultProps = {
    title: 'Avatar 2 cool cinema',
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <img src={this.props.src}/>
        <h4>{this.props.title}</h4>
        <button onClick={() => {
          this.props.onClick('HQWEQWEQW');
        }}>Submit
        </button>
      </div>
    );
  }
}

// Avatar.defaultProps = {
//   title: 'Avatar 2 cool cinema',
// };

export class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>User Name</h1>
        <Avatar
          src="http://loremipsumpic.com/150/150"
          onClick={(something) => {
            console.log(something);
          }}
        />
        <button onClick={() => {
          console.log('qwerty');
        }}>Header button
        </button>
      </header>
    );
  }
}
