import React, {Component} from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  withRouter,
} from 'react-router-dom';

function Home(props) {
  return <h1>Home page</h1>;
}

function Contacts(props) {
  return <h1>Contacts page</h1>;
}

function Topics(props) {
  return (
    <ul>
      <li>
        <Link to={props.match.url + '/react-topic'}>React</Link>
        <Route path={props.match.url + '/react-topic'} component={Contacts}>

        </Route>
      </li>
    </ul>
  );
}

class RouterClass extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/home">HOME</Link>
          <p>
            <Link to="/contacts">Contacts</Link>
          </p>
          <p>
            <Link to="/topics">Topics</Link>
          </p>

          <Route path="/home" component={Home} exact/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/topics" component={Topics}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default RouterClass;