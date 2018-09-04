import React, {Component} from 'react';

//snippets

/*
*
* Если например длина строки больше 10
* символов, тогда добавить ... - троеточие
* в конце инпута
*
* */
export class YoutubeSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      inputValue: '',
      isActive: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps:', nextProps);
    console.log('props:', this.props);
    if (nextProps.title !== this.state.title) {
      this.setState({
        inputValue: nextProps.title,
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    /*
    * return true / false
    * */
  }

  onChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  onBlur = () => {
    this.props.onBlur(this.state.inputValue);
    this.setState({
      isActive: false,
    });
  };

  render() {
    const {inputValue} = this.state;
    return (
      <div>
        <h3>{this.state.title}</h3>
        <input
          value={inputValue}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onFocus={() => {
            this.setState({
              isActive: true,
            });
          }}
        />
      </div>
    );
  }
}
