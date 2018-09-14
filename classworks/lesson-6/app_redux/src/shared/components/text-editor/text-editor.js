import React, {Component} from 'react';

/*
* PROPS:
*
* value
* onChange
* isInEditMode
* className
*
* */
export class TextEditor extends Component {
  render() {
    const {
      value,
      onChange,
      isInEditMode,
      className
    } = this.props;

    if (isInEditMode) {
      return (
        <input
          value={value}
          className={className}
          onChange={onChange}
        />
      );
    }

    return <span className={className}>{value}</span>;
  }
}
