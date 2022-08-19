import * as types from "../consts/index"
import { findIndex, remove } from 'lodash';
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
            const index = findIndex(state, ['id', idStatus])
            state[index].status = !state[index].status
            localStorage.setItem('data', JSON.stringify(state))
            return [...state];
        case types.deleteProduct:
            const { id : idProduct } = action;
            remove(state, ({ id }) => id === idProduct )
            localStorage.setItem('data', JSON.stringify(state))
            return [...state];
        default:
            return state;
    }
}

export default taskReducer;
