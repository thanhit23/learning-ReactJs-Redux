import React, { Component } from 'react';
import TaskItem from './TaskItem';
import SelectInput from './SelectInput';
import { connect } from "react-redux";
import * as actions from "../actions/index"

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: null,
      filterStatus: 0,
    }
  }

  changeValueFilterByValue = (e) => {
    const { filterName, filterStatus } = this.state;
    const { value, name } = e.target;
    const filter = {
      name: name === 'filterName' ? value : filterName,
      status: name === 'filterStatus' ? Number(value) : filterStatus,
    }
    this.props.onFilter(filter)
    this.setState({
      [name]: value,
    })
  }

  applyFilterData(data) {
    const { isFilterTable } = this.props
    const { name, status } = isFilterTable;
    if (name) {
      data = data.filter(({ name : nameItem }) => nameItem.toLowerCase().indexOf(name) !== -1)
    }

    if (status) {
      data = data.filter(({ status : nameStatus }) => {
        if (status === 0) {
          return data;
        } else {
          return nameStatus === (status === 2)
        }
      })
    }

    return data;
  }

  render() {
    let { data, isFilterTable } = this.props;
    if (isFilterTable) {
      data = this.applyFilterData(data)
    }
    const itemElement = data.map((item, index) => {
      return (
        <TaskItem key={ index } data={ item } index={ index }/>
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
const mapStateToProps = ({ data, isFilterTable }) => {
  return {
    data,
    isFilterTable,
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilter: filter => dispatch(actions.filterTask(filter))
  }
}
const TaskListComponent = connect(
    mapStateToProps,
    mapDispatchToProps,
    )(TaskList)

export default TaskListComponent;
