import React, { Component } from 'react';
import cl from 'classnames';
import { connect } from 'react-redux';
import * as actions from '../actions/index'

class TaskItem extends Component {

  deleteProduct = () => {
    const { data: { id } } = this.props;
    this.props.onDeleteProduct(id);
  }
  editProduct = () => {
    const { data: { id } } = this.props;
    this.props.onUpdateProduct(id)
  }
  updateStatus = () => {
    const { data: { id } } = this.props;
    this.props.onUpdateStatus(id)
  }


  render() {
    const { data : { name, status }, index } = this.props;
    return (
      <tr key={ index }>
        <td>{ index + 1 }</td>
        <td>{ name }</td>
        <td className="text-center">
          <span 
            className={cl('btn', {'btn-success': status, 'btn-danger': !status})}
            onClick={ this.updateStatus }
          >
          { status ? 'Kích Hoạt' : 'Ẩn' }
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
  // console.log(state, 'state');
  return {
    onUpdateStatus: {
      // type:
    }
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: (id) => dispatch(actions.updateStatus(id)),
    onDeleteProduct: (id) => dispatch(actions.deleteProduct(id)),
    onUpdateProduct: (id) => dispatch(actions.updateProduct(id)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
