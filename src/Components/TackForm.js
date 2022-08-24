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
      status: false,
      originData: {
        id: null,
        name: '',
        status: false
      },
    }
  }

  componentWillReceiveProps(nextProps ) {
    if (!nextProps) return;
    const { originData } = this.state
    const { isEditProduct } = nextProps;
    if (isEditProduct) {
      this.setState({
        originData: isEditProduct ? isEditProduct : originData
      })
      console.log(isEditProduct, 'isEditProduct')
      this.setState(isEditProduct);
    } else if (isEditProduct === null) {
      this.setState({
        id: null,
        name: '',
        status: false,
      });
    }
  }

  editDataProduct = () => {
    const { id, name, status } = this.state
    this.setState({ id, name, status })
    this.props.editDataProduct(this.state)
  }
  changeValueInput = event => {
    let { target: { name, value } } = event;
    if (name === 'status') {
      value = Boolean(value)
    }
    this.setState({
      [name]: value,
    })
  }
  onSave = () => {
    const { handleSaveProduct, onCloseForm } = this.props
    const { id, name, status } = this.state
    handleSaveProduct({
      id,
      name,
      status: (status === 'true' || status) ? true : false,
    })
    onCloseForm()
    this.resetToOriginal();
  }
  resetToOriginal = () => {
    const originData = this.state
    this.setState({
      originData,
    });
  }

  render() {
    const { isDisForm } = this.props
    if (!isDisForm) return null;
    const { onCloseForm } = this.props
    const { id, name, status } = this.state;

    return (
      <div id="modal-1" className="modal" tabIndex="-1" style={{display: 'block'}}>
        <div className="col-md-4 modal-dialog modal-custom  col-lg-4">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="panel-title">{ (id !== null) ? 'Update product' : 'Add product' }</h3>
              <i className="btn-close-form fa-solid fa-circle-xmark" onClick={ onCloseForm }></i>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Name :</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={ this.changeValueInput }
                />
              </div>
              <label>Status :</label>
              <select
                className="form-control"
                required="required"
                name="status"
                value={status}
                onChange={ this.changeValueInput }
              >
                <option value={ true }>Kích Hoạt</option>
                <option value={ false }>Ẩn</option>
              </select>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-danger"
                onClick={ onCloseForm }
              >Cancel</button>
              &nbsp;
              <button
                type="submit"
                className="btn btn-primary"
                onClick={ this.resetToOriginal }
              >Reset</button>
              &nbsp;
              <button
                type="submit"
                className="btn btn-warning"
                onClick={ this.onSave }
              >{(id !== null) ? 'Save change' : 'Add'}</button>
            </div>
          </div>
        </div>
      </div>
    )
  };
}
const mapStateToProps = ({ isDisForm, isEditProduct }) => {
  return {
    isDisForm,
    isEditProduct,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleSaveProduct: task => dispatch(actions.saveProduct(task)),
    onCloseForm: () => dispatch(actions.closeForm())
  }
}
const TaskFormComponent = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TaskForm)

export default TaskFormComponent;
