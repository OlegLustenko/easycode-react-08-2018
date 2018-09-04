import React, {Component} from 'react';

export class UserPage extends Component {
  render() {
    return (
      <div className="container">
        <h1>USER PAGE</h1>
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">MacBook pro 2018</h5>
                  <p className="card-text">MacBook pro 2018</p>
                  <button className="btn btn-light" disabled onClick={}>
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
    );
  }
}

export default UserPage;