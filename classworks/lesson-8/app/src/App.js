import React, {Component} from 'react';

import './App.css';
import UsersApp from './users-app/users-app';
import {RandomUsersApp} from './random-users/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RandomUsersApp />
      </div>
    );
  }
}

export default App;
