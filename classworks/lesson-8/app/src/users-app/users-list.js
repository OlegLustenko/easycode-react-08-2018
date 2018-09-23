import React, {Component} from 'react';
import {withState, withHandlers, compose, lifecycle, withProps} from 'recompose';

import './users-list.css';

export class UsersListComponent extends Component {
  static defaultProps = {
    users: [{fname: 'test', lname: 'test', id: '0'}],
  };

  renderUsers() {
    return this.props.users.map((user, index) => (
      <li className="users-list-item" key={user.lname + index}>
        <div>fname: {user.fname}</div>
        <div>lname: {user.lname}</div>
      </li>
    ));
  }

  render() {
    const {isLoading, getUsersWithLoader, getXXXX} = this.props;

    return (
      <React.Fragment>
        <button onClick={getXXXX}>Refresh</button>
        {isLoading && 'Loading...'}
        <ul className="users-list">{this.renderUsers()}</ul>
      </React.Fragment>
    );
  }
}

const withLoadingState = compose(
  withState('isLoading', 'setLoadingState', false),
  withHandlers({
    getUsersWithLoader: (props) => () => {
      props.setLoadingState(true, props.getUsers);
    },
    setUnloadingState: (props) => () => {
      props.setLoadingState(false);
    },
  }),
);

const withOptimization = compose(
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (nextProps.users !== this.props.users) {
        this.props.setUnloadingState();
      }
    },
    shouldComponentUpdate(nextProps) {
      return this.props.isLoading !== nextProps.isLoading;
    },
  }),
);

export const UsersList = compose(
  withLoadingState,
  withOptimization,
)(UsersListComponent);

const add = (a) => a + 10;

const addTwenty = compose(add, add);
