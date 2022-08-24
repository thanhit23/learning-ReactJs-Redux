import React, { Component } from 'react'
import Search from './Search'
import Sort from './Sort'

class Control extends Component {
  render() {
    return (
      <div className="row mt-15 my-3">
        <Search/>
        <Sort sortNameOnChange={ this.props.sortNameOnChange }/>
      </div>
    );
  }
}

export default Control;
