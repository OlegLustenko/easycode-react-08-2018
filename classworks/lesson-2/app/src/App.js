import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {Header} from './react-components';
import {InputComponent} from './react-state-components';
import {Counter} from './state-counter';

class App extends Component {
  render() {
    return (
      <main>
        <Counter>
          <Header/>
        </Counter>
      </main>
    );
  }
}

export default App;
