import React, { Component } from 'react'
import cls from 'classnames'
import {connect} from "react-redux"
import * as actions from "../actions"

class Sort extends Component {
  onClickSort = (by, value) => {
      const { sortNameOnChange } = this.props
      sortNameOnChange({
        by,
        value,
      })
  }

  render() {
    const { by, value } = this.props
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
            Sắp Xếp
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li onClick={ () => this.onClickSort('name', 1) }>
              <a className={cls("dropdown-item", {'sort_selected': (by === 'name' && value === 1)} )} href='/#' role="button">
                <i className="fa-solid fa-arrow-up-z-a" />
                <span className="pr-5">
                  Tên A-Z
                </span>
              </a>
            </li>
            <li onClick={ () => this.onClickSort('name', -1) }>
              <a className={cls("dropdown-item", {'sort_selected': (by === 'name' && value === -1)} )} href='/#' role="button">
                <i className="fa-solid fa-arrow-down-z-a"/>
                <span className="pr-5">
                  Tên Z-A
                </span>
              </a>
            </li>
            <li role="separator" className="divider" />
            <li onClick={ () => this.onClickSort('status', 1) }>
              <a className={cls("dropdown-item", {'sort_selected': (by === 'status' && value === 1)} )} href='/#' role="button">Kích Hoạt</a>
            </li>
            <li onClick={ () => this.onClickSort('status', -1) }>
              <a className={cls("dropdown-item", {'sort_selected': (by === 'status' && value === -1)} )} href='/#' role="button">Ẩn</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({ isSort: { by, value } }) => {
  return{
    by,
    value,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    sortNameOnChange: value => dispatch(actions.sortProduct(value))
  }
}
const SortComponent = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Sort)

export default SortComponent;
