import { combineReducers } from "redux";
import data from "./tasks";
import isDisForm from "./handleDisplayForm"
import isEditProduct from "./handleEditProduct"
import isFilterTable from "./filterTable"

const rootReducers = combineReducers({
    data,
    isDisForm,
    isEditProduct,
    isFilterTable,
})

export default rootReducers;
