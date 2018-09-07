import React, {Component} from 'react';
import {Contacts} from './components/contacts';
import './hoc-example.css';

import './components/loading-hoc.css'
export class HOCExample extends Component {
  state = {contacts: []};

  componentDidMount() {
    fetch('https://api.randomuser.me/?nat=us,gb&results=50')
      .then((response) => response.json())
      .then((parsedResponse) =>
        parsedResponse.results.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          thumbnail: user.picture.thumbnail,
        })),
      )
      .then((contacts) => this.setState({contacts}));
  }

  render() {
    return (
      <div className="App">
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}
