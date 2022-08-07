import React, { Component } from 'react';
import cl from 'classnames';

class TaskItem extends Component {

  deleteProduct = () => {
    const { data: { id } } = this.props;
    this.props.deleteProduct(id);
  }
  editProduct = () => {
    const { data: { id } } = this.props;
    this.props.editProduct(id)
  }
  updateStatus = () => {
    const { data: { id } } = this.props;
    this.props.updateStatus(id)
  }
  render() {
    const { data, index } = this.props;
    return (
      <tr key={ index }>
        <td>{ index + 1 }</td>
        <td>{ data.name }</td>
        <td className="text-center">
          <span 
            className={cl('btn', {'btn-success': data.status, 'btn-danger': !data.status})} 
            onClick={ this.updateStatus }
          >
          { data.status ? 'Kích Hoạt' : 'Ẩn' }
          </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning" onClick={ this.editProduct } data-name="edit">
            <span className="fa fa-pencil mr-5" />Sửa
          </button>&nbsp;
          <button type="button" className="btn btn-danger" onClick={ this.deleteProduct } data-name="delete">
            <span className="fa fa-trash mr-5" />Xóa
          </button>
        </td>
      </tr>
    )
  }
}

export default TaskItem;
