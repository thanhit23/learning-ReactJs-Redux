import React, { Component } from 'react';
import './App.css';
import TaskForm from './Components/TackForm';
import Control from './Components/Control';
import TaskList from './Components/TaskList';
import cl from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      disForm: false,
      editForm: null,
    }
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem('data')) {
      const data = JSON.parse(localStorage.getItem('data'))
      this.setState({ data });
    }
  }

  toggleForm = () => {
    this.setState({ disForm: !this.state.disForm })
  }

  handleAddData = (datas) => {
    const { name, status } = datas;
    const { data } = this.state;
    const db = {
      id: data.length + 1,
      name,
      status,
    }
    data.push(db)
    this.setState({ ...this.state, data});

    localStorage.setItem('data', JSON.stringify(data));
    this.toggleForm();
  }

  updateStatus = (id) => {
    const { data } = this.state;
    const index = this.findProductById(id);
    if (index !== null) {
      data[index].status = !data[index].status;
    }
    this.setState({ data })
    localStorage.setItem('data', JSON.stringify(data))
  }

  editProduct = (id) => {
    const { data } = this.state;
    const index = this.findProductById(id);
    const editForm = data[index]
    this.setState({ editForm, disForm: true });
    console.log(editForm);
    if (index === '') {
      console.log(index);
    } else {
      console.log(index, 'index');
    }
  }

  deleteProduct = (id) => {
    const { data } = this.state;
    const index = this.findProductById(id);
    if (index !== null) {
      data.splice(index, 1);
    }
    this.setState({ data , disForm: false})
    localStorage.setItem('data', JSON.stringify(data))
  }

  findProductById = (id) => {
    const { data } = this.state;
    let result = null;
    data.forEach((value, index) => {
      if (value.id === id) {
        result = index;
      }
    })

    return result;
  }

  render() {
    const { data, disForm, editForm } = this.state;
    const element = disForm ? <TaskForm toggleForm={this.toggleForm} handleAddData={this.handleAddData} editProduct={editForm} /> : '';
    const colShowProductForm = disForm ? '8' : '12';
    return (
      <div className="container">
        <div className="text-center">
          <h1>Products Management</h1>
        </div>
        <div className="row">
          <div className={ disForm ? "col-md-4 col-lg-4" : "" }>
            { element }
          </div>
          <div className={cl([`col-md-${colShowProductForm}`], [`col-lg-${colShowProductForm}`])}>
            <button type="button" className="btn btn-primary" onClick={this.toggleForm}>
              <i className="fa fa-plus mr-5" />Add product
            </button>
            <Control />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList
                  data={ data }
                  updateStatus={ this.updateStatus }
                  deleteProduct={ this.deleteProduct }
                  editProduct={ this.editProduct }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
