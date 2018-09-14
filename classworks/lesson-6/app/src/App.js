import React, {Component} from 'react';
import './App.css';

class App extends Component {
  renderLogin() {
    return (
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-12">
          <form>
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Username:
              </label>
              <div className="col-sm-10">
                <input
                  type="username"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="please enter username"
                  name="username"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Password:
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="password"
                  name="password"
                />
              </div>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Save me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  renderRecepts() {
    return (
      <div>
        <div className="card breadcrumb">
          <h5 className="card-header">Recept Name</h5>
          <div className="card-body row">
            <div className="col-8">
              <ul className="list-group list-group-flush">
                <li className="list-unstyled">1) Ingredient 1</li>
                <li className="list-unstyled">2) Ingredient 2</li>
                <li className="list-unstyled">3) Ingredient 3</li>
              </ul>
            </div>
            <div className="col-4">
              <button className="btn btn-primary btn-lg btn-block">
                Редактировать
              </button>
              <button className="btn btn-secondary btn-lg btn-block">
                Удалить
              </button>
            </div>
          </div>
          <div className="card-footer text-muted">
            <div className="text-secondary float-right">
              Всего ингридиентов: 2 days ago
            </div>
          </div>
        </div>
        <div className="card breadcrumb">
          <h5 className="card-header">Recept Name</h5>
          <div className="card-body row">
            <div className="col-8">
              <ul className="list-group list-group-flush">
                <li className="list-unstyled">1) Ingredient 1</li>
                <li className="list-unstyled">2) Ingredient 2</li>
                <li className="list-unstyled">3) Ingredient 3</li>
              </ul>
            </div>
            <div className="col-4">
              <button className="btn btn-primary btn-lg btn-block">
                Редактировать
              </button>
              <button className="btn btn-secondary btn-lg btn-block">
                Удалить
              </button>
            </div>
          </div>
          <div className="card-footer text-muted">
            <div className="text-secondary float-right">
              Всего ингридиентов: 2 days ago
            </div>
          </div>
        </div>
        <div className="card breadcrumb">
          <h5 className="card-header">Recept Name</h5>
          <div className="card-body row">
            <div className="col-8">
              <ul className="list-group list-group-flush">
                <li className="list-unstyled">1) Ingredient 1</li>
                <li className="list-unstyled">2) Ingredient 2</li>
                <li className="list-unstyled">3) Ingredient 3</li>
              </ul>
            </div>
            <div className="col-4">
              <button className="btn btn-primary btn-lg btn-block">
                Редактировать
              </button>
              <button className="btn btn-secondary btn-lg btn-block">
                Удалить
              </button>
            </div>
          </div>
          <div className="card-footer text-muted">
            <div className="text-secondary float-right">
              Всего ингридиентов: 2 days ago
            </div>
          </div>
        </div>
        <button className="btn btn-primary btn-block">Add new Recept</button>
      </div>
    );
  }

  renderReceptEdit() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <div className="row">
            <div className="col-4">
              THERE AN A IMAGE
              <button className="btn-group">
                <button type="button" className="btn btn-primary">
                  Primary
                </button>
                <button type="button" className="btn btn-secondary">
                  Secondary
                </button>
              </button>
            </div>
            <div className="col-8">
              <form>
                <div className="form-group row">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label">
                    name:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="name"
                    />
                  </div>
                </div>
                <select multiple>
                  <option>INGREDIENT 1</option>
                  <option selected>INGREDIENT 2</option>
                  <option>INGREDIENT 3</option>
                </select>
                <button className="btn-group-vertical">
                  <button type="submit" className="btn btn-primary">
                    >
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {'<'}
                  </button>
                </button>
                <select multiple>
                  <option selected>INGREDIENT 1</option>
                  <option>INGREDIENT 2</option>
                  <option>INGREDIENT 3</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderHeader() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon">123</span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <a className="navbar-brand" href="#">
                USER LOGIN
              </a>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Sign up <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </form>
          </div>
          <a className="navbar-brand" href="#">
            <img width="30" height="30" className="d-inline-block align-top" />
          </a>
        </nav>
      </header>
    );
  }

  render() {
    return (
      <React.Fragment>
        {/*{this.renderHeader()}*/}
        <div className="container h-50">
          {/*{this.renderLogin()}*/}
          {/*{this.renderRecepts()}*/}
          {/*{this.renderReceptEdit()}*/}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
