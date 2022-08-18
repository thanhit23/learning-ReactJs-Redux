import { combineReducers } from "redux";
import data from "./tasks";
import isDisForm from "./handleDisplayForm"

const rootReducers = combineReducers({
    data,
    isDisForm,
})

export default rootReducers;
