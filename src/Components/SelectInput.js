import React, { Component } from 'react';

class SelectInput extends Component {
  render() {
    const { index, data: { title } } = this.props;
    return (
      <option value={ index } {...this.props.data}>{ title }</option>
    )
  }
}

export default SelectInput;
