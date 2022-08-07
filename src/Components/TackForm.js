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
    const { editProduct } = this.props;
    if (editProduct) {
      const { id, name, status } = editProduct
      this.setState(editProduct)
    };
  }
  toggleForm = () => {
    console.log(this.editProduct());
    this.props.toggleForm();
  }

  editProduct = () => {
    
    console.log(this.state.id);
    // console.log(this.props.editProduct(), 'this.props.editProduct()');;
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
    console.log(this.state, 'this.state');
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
          <div className="text-center">
          <button
              type="submit"
              className="btn btn-danger"
              onClick={this.cancelInputValue}
            >Cancel</button>
          &nbsp;
            <button
              type="submit"
              className="btn btn-warning"
              onClick={(id !== null) ? this.addProduct : this.editProduct}
            >{(id !== null) ? 'Add' : 'Save change'}</button>
          </div>
        </div>
      </div>
    )
  };
}

export default TaskForm;
