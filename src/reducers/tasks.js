import * as types from "../consts/index"
import { findIndex } from 'lodash';
const data = JSON.parse(localStorage.getItem("data"))
const initState = data ? data : []

const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case types.listAll:
            return state;
        case types.addProduct:
            const id = state.length + 1;
            const { name, status } = action.task
            const newTask = {
                id,
                name,
                status: status === 'false' ? false : true,
            }
            state.push(newTask)
            localStorage.setItem('data', JSON.stringify(state))
            return [...state];
        case types.updateStatus:
            const { id : idStatus } = action;
            console.log(idStatus, 'idStatus')
            console.log(state, 'state')
            console.log(findIndex(state,  ), 'findIndex(state, idStatus)')
            return state;
        default:
            return state;
    }
}

export default taskReducer;
