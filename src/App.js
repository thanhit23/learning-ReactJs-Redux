import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import './App.css';
import TaskForm from './Components/TackForm';
import Control from './Components/Control';
import TaskList from './Components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      disForm: true,
    }
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem('data')) {
      const data = JSON.parse(localStorage.getItem('data'))
      this.setState({ data });
    }
  }

  generateData() {
    const data = [
      {
        id: uniqueId(),
        name: 'Học lập trình chán quá',
        status: true,
      },
      {
        id: uniqueId(),
        name: 'Học lập trình chán quá',
        status: false,
      },
      {
        id: uniqueId(),
        name: 'Học lập trình mệt vc',
        status: false,
      }
    ]

    localStorage.setItem('data', JSON.stringify(data));
  }
  handleForm() {
    this.setState({ disForm: !this.state.disForm })
  };

  render() {
    const { data, disForm } = this.state;
    const element = disForm ? <TaskForm closeForm={() => this.handleForm()}  /> : '';
    return (
      <div className="container">
        <div className="text-center">
          <h1>Products Management</h1>
        </div>
        <div className="row">
          <div className={ disForm ? "col-md-4 col-lg-4" : "" }>
            { element }
          </div>
          <div className={ disForm ? "col-md-8 col-lg-8" : "col-md-12 col-lg-12"}>
            <button type="button" className="btn btn-primary" onClick={ () => this.handleForm() }>
              <i className="fa fa-plus mr-5" />Add product
            </button>
            <button type="button" className="btn btn-primary" onClick={ () => this.generateData() }>
              <i className="fa fa-plus mr-5" />Render data
            </button>
            <Control />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList data={ data } />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
