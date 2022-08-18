import React, { Component } from 'react';
import TaskItem from './TaskItem';
import SelectInput from './SelectInput';
import { connect } from "react-redux";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: ' ',
      filterStatus: 0,
    }
  }

  changeValueFilterByValue = (e) => {
    const { filterName, filterStatus } = this.state;
    const { value, name } = e.target;

    this.props.getValueFilter(
      name === 'filterName' ? value : filterName,
      name === 'filterStatus' ? value : filterStatus,
    )
    this.setState({
      [name]: value,
    })
  }

  render() {
    console.log(this.props.data, 'props.data')

    const { data } = this.props;
    const itemElement = data.map((item, index) => {
      return (
        <TaskItem
          key={ index }
          data={ item }
          index={ index }
          updateStatus={ this.props.updateStatus }
          deleteProduct={ this.props.deleteProduct }
          editProduct={ this.props.editProduct }
        />
      )
    })
    const selectData = [
      {
        title: 'Tất cả',
        className: 'btn'
      },
      {
        title: 'Ẩn',
      },
      {
        title: 'Kích Hoạt',
      }
    ]
    const selectInputElement = selectData.map((data, index) => {
      return (
        <SelectInput key={ index } data={ data } index={ index }/>
      )
    })
    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody key="tbody">
          <tr>
            <td />
            <td>
              <input 
                type="text"
                onChange={ this.changeValueFilterByValue } 
                className="form-control"
                name="filterName"
              />
            </td>
            <td>
              <select className="form-control" name="filterStatus" onChange={ this.changeValueFilterByValue }>
                { selectInputElement }
              </select>
            </td>
            <td />
          </tr>
          { itemElement }
        </tbody>
      </table>
    )
  }
}
const mapStateToProps = (state) => {
  const { data } = state
  return {
    data,
  }
}

export default connect(mapStateToProps, null)(TaskList);
