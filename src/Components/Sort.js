import React, { Component } from 'react';

class Sort extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
            Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href='/#' role="button">
                <span className="fa fa-sort-alpha-asc pr-5">
                  Tên A-Z
                </span>
              </a>
            </li>
            <li>
              <a className="dropdown-item" href='/#' role="button">
                <span className="fa fa-sort-alpha-desc pr-5">
                  Tên Z-A
                </span>
              </a>
            </li>
            <li role="separator" className="divider" />
            <li><a className="dropdown-item" href='/#' role="button">Trạng Thái Kích Hoạt</a></li>
            <li><a className="dropdown-item" href='/#' role="button">Trạng Thái Ẩn</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Sort;
