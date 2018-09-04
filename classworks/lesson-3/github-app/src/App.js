import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ResizeableBlock from './components/resizeable-block/resizeable-block';

const url = 'https://api.github.com/users';

/*
https://api.github.com/users/{userName}
https://api.github.com/users/{userName}/orgs
https://api.github.com/orgs/{org-name}/repos
https://api.github.com/repos/{org-name}/{user}/pulls

* В поле input ввести никнейм github
* кнопка Organization - отобразить организации пользователя
* кнопка Repositories - отобразить репозитории
*
*
* При отображении Организаций, возле каждой организации Show Repositories
* возле каждого репозитория добавить кнопку "Show Pull Requests"
*
*/

/*
*
* Добавьте
*
*
* */

class App extends Component {
  state = {
    value: '',
    userName: '',
    toggle: true,
  };

  toggleBlock = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  onChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const shouldShowBlock = this.state.counter % 2 === 0;

    return (
      <div className="App">
        <button onClick={this.toggleBlock}>toggle</button>
        {this.state.toggle ? <ResizeableBlock/> : null}
        {/*<input*/}
        {/*value={this.state.value}*/}
        {/*onChange={this.onChange}*/}
        {/*/>*/}
        {/*<pre>user name: </pre>*/}
        {/*<button>Repositories</button>*/}
        {/*<button>Organization</button>*/}
      </div>
    );
  }
}

export default App;
