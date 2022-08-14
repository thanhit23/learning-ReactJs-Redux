import React, { Component } from "react";
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
  // UNSAFE_componentWillMount(nextProps) {
  //   const { editProduct } = nextProps;
  //   if (nextProps && editProduct) {
  //     this.setState(editProduct);
  //   }
  // }
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
  toggleForm = () => {
    this.props.toggleForm();
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
          <i className="fa-solid fa-circle-xmark" onClick={ this.toggleForm }></i>
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

export default TaskForm;
