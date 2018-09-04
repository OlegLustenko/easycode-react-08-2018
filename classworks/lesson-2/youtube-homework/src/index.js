import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import App from './App';

const mountNode = document.getElementById('root');
const render = (Component = App) => {
  ReactDOM.render(<Component/>, document.getElementById('root'));
};

render();

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}