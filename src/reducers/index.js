import { combineReducers } from 'redux'
import data from './tasks'
import isDisForm from './handleDisplayForm'
import isEditProduct from './handleEditProduct'
import isFilterTable from './filterTable'
import isSearchProduct from './search'
import isSort from "./sort"

const rootReducers = combineReducers({
    data,
    isDisForm,
    isEditProduct,
    isFilterTable,
    isSearchProduct,
    isSort,
})

export default rootReducers;
