import React, {Component} from 'react';

import {TextEditor} from '../../../../shared/components/text-editor/text-editor';

import './server.css';

export class ServerComponent extends Component {
  state = {isInEditMode: false};

  toggleEditMode = () => {
    this.setState((prevState) => {
      return {
        isInEditMode: !prevState.isInEditMode
      };
    });
  };

  render() {
    const {isInEditMode} = this.state;
    const {
      name
    } = this.props;

    return (
      <div className="server__item">
        <TextEditor
          isInEditMode={isInEditMode}
          className="server__item-title"
          value={name}
        />
        <button className="sever__item-edit" onClick={this.toggleEditMode}>
          Edit server
        </button>
      </div>
    );
  }
}
