import React, { Component } from 'react';
import TaskItem from './TaskItem';
import SelectInput from './SelectInput';

class TaskList extends Component {
  render() {
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
    const dataSelect = [
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
    const selectInputElement = dataSelect.map((data, index) => {
      return (
        <SelectInput key={index} data={ data } index={ index }/>
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
              <input type="text" className="form-control" />
            </td>
            <td>
              <select className="form-control">
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

export default TaskList;
