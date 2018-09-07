import React, { Component } from "react";

import {
  Link,
  BrowserRouter,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import RouterClass from "./router";
import {
  ParentComponent,
  ChildComponent
} from "./components/ways-of-composition/composition";
import PageContent from "./components/ways-of-composition/children-composition";
import { HOCExample } from "./components/HOC-example/HOCExample";
import { Counter } from "./components/ways-of-composition/render-props";
import { Header } from "./components/ways-of-composition/slots";
import { CounterHOC } from "./components/HOC-example/components/HOCs/counter-hoc";

const Logo = () => {
  return <div style={{ marginRight: "auto" }}>LOGO</div>;
};

const UserName = () => {
  return <div>UserName @@@@@@@@@@@@@@@</div>;
};

const ShowMyName = () => <div>Oleh</div>;
const ShowMyNameWithCounter = withRouter(CounterHOC(ShowMyName));

const PageNotFound = () => <h1>Page Not Found 404 (-_(-_-)_-)</h1>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/sign-in">show User Name</Link>
          <hr />
          <Link to="/sing-up">
            navigate to Counter and my Name !
          </Link>

          <pre>
            <Switch>
              <Route path="/sign-in" component={UserName} exact />
              <Route
                path="/sing-up"
                component={ShowMyNameWithCounter}
              />
              <Route component={PageNotFound} />
            </Switch>
          </pre>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
