import React, { Component } from 'react';
import './App.css';
import TaskForm from './Components/TackForm';
import Control from './Components/Control';
import TaskList from './Components/TaskList';
import { connect } from 'react-redux'
import * as actions from './actions/index'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        name: '',
        value: 0,
      },
      keyword: '',
      sort: {
        by: 'name',
        value: 1,
      },
    }
  }

  getValueFilter = (name, status) => {
    status = Number(status);
    name = name.toLowerCase();
    this.setState({
      filter: {
        name,
        status,
      }
    })
  }

  searchKeywords = (keyword) => {
    this.setState({ keyword })
  }

  sortNameOnChange = (data) => {
    const { by, value } = data
    this.setState({
      sort: {
        by,
        value,
      },
    })
  }

  addProduct = () => {
    const { isEditProduct : { id }, onOpenForm, onClearForm } =  this.props
    if (id) onClearForm()
    onOpenForm()
  }

  render() {
    let { data, filter, keyWord } = this.state;
    const { name, status } = filter;
    if (filter) {
      if (name) {
        data = data.filter(({ name : nameItem }) => nameItem.toLowerCase().indexOf(name) !== -1)
      }
      
      if (status) {
        data = data.filter(({ status : nameStatus }) => {
          if (status === 0) {
            return data;
          } else {
            return nameStatus === (status === 1 ? false : true)
          }
        })
      }
    }

    if (keyWord) {
      data = data.filter(({ name : nameItem }) => nameItem.toLowerCase().indexOf(keyWord) !== -1)
    }

    return (
      <div className="container">
        <div className="text-center">
          <h1>Products Management</h1>
        </div>
        <div className="row">
          <TaskForm/>
          <div className="col-md-12 col-lg-12">
            <button type="button" className="btn btn-primary" onClick={ this.addProduct }>
              <i className="fa fa-plus mr-5" />Add product
            </button>
            <Control searchKeywords={ this.searchKeywords } sortNameOnChange={ this.sortNameOnChange }/>
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList getValueFilter={ this.getValueFilter }/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ isDisForm, isEditProduct, isClearForm }) => {
  return {
    isDisForm,
    isEditProduct,
    isClearForm,
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onOpenForm: () => {dispatch(actions.openForm())},
    onClearForm: () => dispatch(actions.clearForm()),
  }
}
const AppComponent = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)

export default AppComponent;
