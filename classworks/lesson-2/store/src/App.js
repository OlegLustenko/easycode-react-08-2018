import React, {Component} from 'react';

import './app.css';
import {HomePage} from './pages/home-page';
import {AdminStorePage} from './pages/admin-store-page';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePage: 'homepage',
    };
  }

  changeActivePageToAdminPage = () => {
    this.setState({
      activePage: 'admin-store-page',
    });
  };

  changeActivePageToUserPage = () => {
    this.setState({
      activePage: 'user-store-page',
    });
  };

  render() {
    const {activePage} = this.state;

    if (activePage === 'homepage') {
      return (
        <HomePage
          changeActivePageToAdminPage={this.changeActivePageToAdminPage}
          changeActivePageToUserPage={this.changeActivePageToUserPage}
        />
      );
    }

    if (activePage === 'admin-store-page') {
      return <AdminStorePage changeActivePage/>;
    }

    return (
      <div className="wrapper">
        <div className="container flex-grow-1">
          <div className="row">
            <div className="col-8">
              <div className="admin-orders">
                <h1>ADMIN PAGE</h1>
                <ul className="list-group">
                  <li className="list-group-item">
                    <img src="#" alt=""/>
                    <a href="#" className="admin-orders__link">
                      MacBook pro 2018
                    </a>
                    <h2 className="float-right btn-link">✎</h2>
                  </li>
                  <li className="list-group-item">
                    <img src="#" alt=""/>
                    <a href="#" className="admin-orders__link">
                      Dell xs
                    </a>
                    <h2 className="float-right btn-link">✎</h2>
                  </li>
                  <li className="list-group-item">
                    <img src="#" alt=""/>
                    <a href="#" className="admin-orders__link">
                      Microsoft Surface
                    </a>
                    <h2 className="float-right btn-link">✎</h2>
                  </li>
                </ul>
                <br/>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      @
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter new name"
                  />
                  <button className="btn btn-primary">Add</button>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div>Admin</div>
              <button>User Logout</button>
            </div>
          </div>
        </div>
        <div className="container">
          <h1>USER PAGE</h1>
          <div className="row">
            <div className="col-8">
              <div className="row">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">MacBook pro 2018</h5>
                    <p className="card-text">MacBook pro 2018</p>
                    <button className="btn btn-light" disabled>
                      Buy
                    </button>
                    <h3 className="text-success">✓✓✓✓✓</h3>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Dell xs</h5>
                    <p className="card-texDt">Dell xs</p>
                    <a href="#" className="btn btn-primary">
                      Buy
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Microsoft Surface</h5>
                    <p className="card-text">Microsoft Surface</p>
                    <a href="#" className="btn btn-primary">
                      Buy
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div>User</div>
              <button>User Logout</button>
            </div>
          </div>
        </div>
        <hr/>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1>Shopping Cart</h1>
              <ul className="list-group">
                <li className="list-group-item">
                  <img src="#" alt=""/>
                  <a href="#" className="admin-orders__link">
                    MacBook Pro 2018
                  </a>
                  <h2 className="float-right badge-light">✓</h2>
                </li>
                <li className="list-group-item">
                  <img src="#" alt=""/>
                  <a href="#" className="admin-orders__link">
                    Dell xs
                  </a>
                  <h2 className="float-right badge-light">✓</h2>
                </li>
                <li className="list-group-item">
                  <img src="#" alt=""/>
                  <a href="#" className="admin-orders__link">
                    Microsoft Surface
                  </a>
                  <h2 className="float-right badge-light">✓</h2>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <div>User</div>
              <button>User Logout</button>
            </div>
          </div>
          <div className="row">
            <pre>price:</pre>
          </div>
          <div className="row">
            <button className="btn btn-primary">Ship it</button>
          </div>
        </div>
        <hr/>
        <div className="container">
          <h1>Main Page</h1>
          <div className="row">
            <button className="btn btn-primary">Login as Admin</button>
            <button className="btn btn-outline-primary">Login as User</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
