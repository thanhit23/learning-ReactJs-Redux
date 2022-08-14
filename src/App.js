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

  componentDidMount() {
    if (localStorage && localStorage.getItem('data')) {
      const data = JSON.parse(localStorage.getItem('data'))
      this.setState({ data });
    }
  }

  toggleForm = () => {
    const { disForm, editForm } = this.state;
    if (disForm && editForm !== null) {
      this.setState({ disForm: true, editForm: null })
    } else {
      this.setState({ disForm: !disForm, editForm: null })
    }
  }

  handleAddData = (dataAdd) => {
    const { name, status } = dataAdd;
    const { data } = this.state;
    const db = {
      id: data.length + 1,
      name,
      status: (!status || status === "false") ? false : true,
    }
    data.push(db)
    this.setState({ ...this.state, data});
    localStorage.setItem('data', JSON.stringify(data));
    this.toggleForm();
  }

  updateStatus = (id) => {
    const { data } = this.state;
    const index = this.getIndexOfProductByProductId(id);

    if (index || index === 0) {
      data[index].status = !data[index].status;
    }
    this.setState({ data })
    localStorage.setItem('data', JSON.stringify(data))
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

  deleteProduct = (id) => {
    const { data } = this.state;
    const index = this.getIndexOfProductByProductId(id);
    if (index !== null) {
      data.splice(index, 1);
    }
    this.setState({ data , disForm: false})
    localStorage.setItem('data', JSON.stringify(data))
  }

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
    let { data, disForm, editForm, filter, keyWord, sort } = this.state;
    const { name, status } = filter;
    const { by, value : valueSort } = sort;
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

    if (by === 'name') {
      data.sort((a, b) => {
        if (a.name > b.name) return -valueSort
        else if (a.name < b.name) return valueSort
        else return 0;
      })
    } else {
      data.sort((a, b) => {
        if (a.status > b.status) return -valueSort
        else if (a.status < b.status) return valueSort
        else return 0;
      })
    }

    const element = disForm ? <TaskForm 
                                toggleForm={this.toggleForm} 
                                handleAddData={this.handleAddData} 
                                editForm={editForm} 
                                editDataProduct={this.editDataProduct}
                              /> : '';
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
            <Control searchKeywords={ this.searchKeywords } sortNameOnChange={ this.sortNameOnChange }/>
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList
                  data={ data }
                  updateStatus={ this.updateStatus }
                  deleteProduct={ this.deleteProduct }
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

export default App;
