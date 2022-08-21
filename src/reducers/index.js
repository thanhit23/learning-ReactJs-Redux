import { combineReducers } from "redux";
import data from "./tasks";
import isDisForm from "./handleDisplayForm"
import isEditProduct from "./handleEditProduct"

const rootReducers = combineReducers({
    data,
    isDisForm,
    isEditProduct,
})

export default rootReducers;
