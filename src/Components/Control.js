import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
  searchKeywords = (keyWords) => {
    console.log(keyWords, 'keyWords');
  }

  render() {
    return (
      <div className="row mt-15">
        <Search searchKeywords={ this.props.searchKeywords }/>
        <Sort />
      </div>
    );
  }
}

export default Control;
