import React, { Component } from "react";
import ("../css/taskForm.css");

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: true,
    }
  }
  closeForm = () => {
    this.props.closeForm();
  }
  handleForm = event => {
    const {target: { name, value } } = event;
    this.setState({
      [name]: value,
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Add product</h3>
          <i className="fa-solid fa-circle-xmark" onClick={ this.closeForm }></i>
        </div>
        <div className="panel-body">
          <form onSubmit={ this.onSubmit }>
            <div className="form-group">
              <label>Name :</label>
              <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleForm}/>
            </div>
            <label>Status :</label>
            <select className="form-control" required="required" name="status" value={this.state.status} onChange={this.handleForm}>
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <div className="text-center">
              <button type="submit" className="btn btn-warning">Add</button>&nbsp;
              <button type="submit" className="btn btn-danger">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    )
  };
}

export default TaskForm;
