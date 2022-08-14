import React, { Component } from 'react';
import cls from 'classnames';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: {
        by: 'name',
        value: 1,
      }
    }
  }
  
  onClickSortName = (by, value) => {
    this.setState({
      sort: {
        by,
        value,
      }
    }, () => {
      const { sort } = this.state
      this.props.sortNameOnChange(sort)
    })
  }

  render() {
    const { sort: { by, value } } = this.state
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
            Sắp Xếp
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li onClick={ () => this.onClickSortName('name', 1) }>
              <a className={cls("dropdown-item", {'sort_selected': (by === 'name' && value === 1)} )} href='/#' role="button">
                <i className="fa-solid fa-arrow-up-z-a"></i>
                <span className="pr-5">
                  Tên A-Z
                </span>
              </a>
            </li>
            <li onClick={ () => this.onClickSortName('name', -1) }>
              <a className={cls("dropdown-item", {'sort_selected': (by === 'name' && value === -1)} )} href='/#' role="button">
                <i className="fa-solid fa-arrow-down-z-a"></i>
                <span className="pr-5">
                  Tên Z-A
                </span>
              </a>
            </li>
            <li role="separator" className="divider" />
            <li onClick={ () => this.onClickSortName('status', 1) }>
              <a className={cls("dropdown-item", {'sort_selected': (by === 'status' && value === 1)} )} href='/#' role="button">Kích Hoạt</a>
            </li>
            <li onClick={ () => this.onClickSortName('status', -1) }>
              <a className={cls("dropdown-item", {'sort_selected': (by === 'status' && value === -1)} )} href='/#' role="button">Ẩn</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Sort;
