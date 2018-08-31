import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const mountNode = document.getElementById('app');

const HelloWorld = (props) => {
  return <h1>Hello world {props.userName}</h1>;
};

const showFrameworks = props => {
  return (
    <>
      <div>PRIVET</div>
      <div>KAK DELA</ div>
    </>
  );
};

const arr = ['Vue', 'Angular', 'React'];
const frameworks = arr.map(framework => {
  return <li>{framework}</li>;
});
ReactDOM.render(<showFrameworks frameworks={['Vue', 'Angular', 'React']}/>, mountNode);

/*
*
* сделайте компонент <ShowFrameworks
*                        frameworks={['Vue', 'Angular', 'React']}/>
* Отобразите в JSX вот такой массив
* передавайте этот список через props
*
* <ul>
*   <li class="user-item">Vue</li>
*   <li class="user-item">Angular</li>
*   <li class="user-item">React</li>
* </ul>
*
* */






