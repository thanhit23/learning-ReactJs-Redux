import React, { Component } from 'react';
import cl from 'classnames';
import { connect } from 'react-redux';
import * as actions from '../actions/index'

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
    const { data } = this.props;
    const { id } = data;
    // const index = findIndex(data, id)
    // console.log(index, 'index');
    // this.props.updateStatus(id)
    this.props.onUpdateStatus(id)
    // return id;
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
const mapStateToProps = state => {
  console.log(state, 'state');
  return {
    
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: (id) => dispatch(actions.updateStatus(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
