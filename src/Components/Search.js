import React, { Component } from 'react'
import { connect } from "react-redux";
import * as actions from "../actions/index"

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: '',
    }
  }

  searchKeyword = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  onSearchKeyword = () => {
    const { searchKeywords } = this.props
    const { keyWord } = this.state
    searchKeywords(keyWord)
  }

  render() {
    const { keyWord } = this.state
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input
            type="text"
            name="keyWord"
            className="form-control"
            placeholder="Nhập từ khóa..."
            value={ keyWord }
            onChange={ this.searchKeyword }
          />
          <span className="input-group-btn">
            <button
              className="btn btn-primary"
              type="button"
              onClick={ this.onSearchKeyword }
            >
              <span className="fa fa-search mr-5" />Tìm
            </button>
          </span>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchKeywords: keyword => dispatch(actions.searchProduct(keyword))
  }
}
const searchComponent = connect(
    null,
    mapDispatchToProps,
)(Search)

export default searchComponent;
