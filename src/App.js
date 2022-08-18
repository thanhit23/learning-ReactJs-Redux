import React, { Component } from 'react';
import './App.css';
import TaskForm from './Components/TackForm';
import Control from './Components/Control';
import TaskList from './Components/TaskList';
import cl from 'classnames';
import { connect } from 'react-redux'
import * as actions from './actions/index'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: null,
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

  editProduct = (id) => {
    console.log("editProduct");
    const { data, editForm } = this.state;
    const index = this.getIndexOfProductByProductId(id);
    console.log(editForm, 'editForm');
    console.log(data, 'data');
    this.setState({ editForm })

    if (index || index === 0) {
      const editForm = data[index]
      this.setState({ editForm, disForm: true })
    }
  }

  editDataProduct = (dataEdit) => {
    const { data } = this.state
    const { id, name, status } = dataEdit
    const index = this.getIndexOfProductByProductId(dataEdit.id);
    if (index || index === 0) {
      data[index].id = id;
      data[index].name = name;
      data[index].status = status;
    }
    this.setState({ data }) 
    localStorage.setItem('data', JSON.stringify(data));
  }

  // deleteProduct = (id) => {
  //   const { data } = this.state;
  //   const index = this.getIndexOfProductByProductId(id);
  //   if (index !== null) {
  //     data.splice(index, 1);
  //   }
  //   this.setState({ data , disForm: false})
  //   localStorage.setItem('data', JSON.stringify(data))
  // }

  getIndexOfProductByProductId = (id) => {
    const { data } = this.state;
    const result = data.findIndex( e => e.id === id );
    return result;
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

  render() {
    let { data, editForm, filter, keyWord } = this.state;
    const { isDisForm } = this.props
    const { name, status } = filter;
    // const { by, value : valueSort } = sort;
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

    // if (by === 'name') {
    //   data.sort((a, b) => {
    //     if (a.name > b.name) return -valueSort
    //     else if (a.name < b.name) return valueSort
    //     else return 0;
    //   })
    // } else {
    //   data.sort((a, b) => {
    //     if (a.status > b.status) return -valueSort
    //     else if (a.status < b.status) return valueSort
    //     else return 0;
    //   })
    // }

    const element = isDisForm ? <TaskForm
                                editForm={editForm} 
                                editDataProduct={this.editDataProduct}
                              /> : '';
    const colShowProductForm = isDisForm ? '8' : '12';
    return (
      <div className="container">
        <div className="text-center">
          <h1>Products Management</h1>
        </div>
        <div className="row">
          <div className={ isDisForm ? "col-md-4 col-lg-4" : "" }>
            { element }
          </div>
          <div className={cl([`col-md-${colShowProductForm}`], [`col-lg-${colShowProductForm}`])}>
            <button type="button" className="btn btn-primary" onClick={ this.props.onToggleForm }>
              <i className="fa fa-plus mr-5" />Add product
            </button>
            <Control searchKeywords={ this.searchKeywords } sortNameOnChange={ this.sortNameOnChange }/>
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList
                  editProduct={ this.editProduct }
                  getValueFilter={ this.getValueFilter }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ isDisForm }) => {
  return {
    isDisForm,
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => dispatch(actions.toggleForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
