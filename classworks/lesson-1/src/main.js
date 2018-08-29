import React from 'react';
import ReactDOM from 'react-dom';

const mountNode = document.getElementById('app');

const HelloWorld = (props) => {
  console.log(props);
  return <h1>Hello world {props.userName}</h1>;
};

const ShowFrameworks = props => {
  return (
    <ul>
      {props.frameworks.map(framework => {
        return <li key={framework}>{framework}</li>;
      })}
    </ul>
  );
};

const arr = ['Vue', 'Angular', 'React'];
const frameworks = arr.map(framework => {
  return <li>{framework}</li>;
});
ReactDOM.render(<Users frameworks={['Vue', 'Angular', 'React']}/>, mountNode);

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




