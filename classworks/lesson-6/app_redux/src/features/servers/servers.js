import React from 'react';
import {connect} from 'react-redux';

import {ServerComponent} from './components/server/server';
import {addServer} from '../../store/actions/servers-actions';

import './servers.css';

export class ServersComponent extends React.Component {
  addNewServer = () => {
    const {addServer, servers} = this.props;

    addServer({
      name: `Server #${servers.length + 1}`
    });
  };

  render() {
    const {servers} = this.props;

    return (
      <React.Fragment>
        <ul className="servers-list">
          {servers.map((server) => {
            return (
              <li className="server-list-item">
                <ServerComponent name={server.name} />
              </li>
            );
          })}
        </ul>
        <button onClick={this.addNewServer}>ADD SERVER</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  // servers
  // history

  // ingredients
  // recepets
  /*
  *
  * {
  *  receptName: '',
  *  ingridients: [1,2,3]
  * }
  *
  * ingrdients: {
  *   [id]: {
  *     id:'123123',
  *     name: 'qweqwe'
  *   }
  * }
  *
  * */
  return {
    servers: state.servers
  };
};

const mapDispatchToProps = {
  addServer
};

export const Servers = connect(mapStateToProps, mapDispatchToProps)(
  ServersComponent
);
