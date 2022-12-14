import React, { Component } from 'react'
import TaskItem from './TaskItem'
import SelectInput from './SelectInput'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { sortBy } from 'lodash'

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
      name: name === "filterName" ? value : filterName,
      status: name === "filterStatus" ? Number(value) : filterStatus,
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
  applySearchData(data, keyword) {
    return data.filter(({ name }) => {
      return name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    })
  }
  sortData(data, sort) {
    const { by, value } = sort
    const valueSort = 1
    if (by === "name") {
      if (value === valueSort) {
        data = sortBy(data, ({ name }) => name)
      } else {
        data = sortBy(data, ({ name }) => name).reverse()
      }
    } else {
      if (value === valueSort) {
        data = sortBy(data, ({ status }) => status).reverse()
      } else {
        data = sortBy(data, ({ status }) => status)
      }
    }

    return data;
  }

  render() {
    let { data, isFilterTable, isSearchProduct, isSort } = this.props;
    if (isSort) {
      const { by, value } = isSort
      const dataToSort = {
        by,
        value,
      }
      data = this.sortData(data, dataToSort)
    }
    if (isSearchProduct) {
      data = this.applySearchData(data, isSearchProduct)
    }

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
        title: 'T???t c???',
        className: 'btn'
      },
      {
        title: '???n',
      },
      {
        title: 'K??ch Ho???t',
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
            <th className="text-center">T??n</th>
            <th className="text-center">Tr???ng Th??i</th>
            <th className="text-center">H??nh ?????ng</th>
          </tr>
        </thead>
        <tbody key="tbody">
          <tr>
            <td/>
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
const mapStateToProps = state => {
  const { data, isFilterTable, isSearchProduct, isSort } = state
  return {
    data,
    isFilterTable,
    isSearchProduct,
    isSort,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onFilter: filter => dispatch(actions.filterProduct(filter))
  }
}
const TaskListComponent = connect(
    mapStateToProps,
    mapDispatchToProps,
    )(TaskList)

export default TaskListComponent;
