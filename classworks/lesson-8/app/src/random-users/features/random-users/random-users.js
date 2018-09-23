import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Contacts} from './components/contacts';
import {getUsers} from './actions/get-users';

export class RandomUsersComponent extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const {
      contacts
    } = this.props;

    return (
      <div className="App">
        <Contacts contacts={contacts}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.users,
  };
};

const mapDispatchToProps = {
  getUsers,
};

export const RandomUsers = connect(mapStateToProps, mapDispatchToProps)(RandomUsersComponent);