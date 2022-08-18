import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index"

import ("../css/taskForm.css");

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: '',
      status: true,
      edit: null,
    }
  }
  componentWillMount() {
    const { editForm } = this.props;
    if (editForm) {
      this.setState(editForm)
    };
  }

  componentWillReceiveProps(nextProps) {
    const { editForm } = nextProps;
    if (!nextProps) return;
    if (editForm) {
      this.setState(editForm);
    } else if (editForm === null) {
      this.setState({
        id: null,
        name: '',
        status: true,
      });
    }
  }

  editDataProduct = () => {
    const { id, name, status } = this.state
    this.setState({ id, name, status })
    this.props.editDataProduct(this.state)
  }
  changeValueInput = event => {
    const { target: { name, value } } = event;
    this.setState({
      [name]: value,
    })
  }
  addProduct = () => {
    this.props.handleAddData(this.state)
    this.cancelInputValue();
  }
  cancelInputValue = () => {
    this.setState({ name: '', status: true});
  }
  render() {
    const { id, name, status } = this.state;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">{ (id !== null) ? 'Update product' : 'Add product' }</h3>
          <i className="fa-solid fa-circle-xmark" onClick={ this.props.onCloseForm }></i>
        </div>
        <div className="panel-body">
          <div className="form-group">
            <label>Name :</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={this.changeValueInput}
            />
          </div>
          <label>Status :</label>
          <select
            className="form-control"
            required="required"
            name="status"
            value={status}
            onChange={this.changeValueInput}
          >
            <option value={true}>Kích Hoạt</option>
            <option value={false}>Ẩn</option>
          </select>
          <div className="text-center mt-2">
          <button
              type="submit"
              className="btn btn-danger"
              onClick={this.cancelInputValue}
            >Cancel</button>
          &nbsp;
            <button
              type="submit"
              className="btn btn-warning"
              onClick={(id !== null) ? this.editDataProduct : this.addProduct }
            >{(id !== null) ? 'Save change' : 'Add'}</button>
          </div>
        </div>
      </div>
    )
  };
}
const mapStateToProps = state => {
  return {

  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    handleAddData: task => dispatch(actions.addProduct(task)),
    onCloseForm: () => dispatch(actions.closeForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
