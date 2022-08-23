import * as types from "../consts/index"
import { findIndex, remove } from 'lodash';
const data = JSON.parse(localStorage.getItem("data"))
const initState = data ? data : []

const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.PRODUCT_SAVE:
            const { id, name, status } = action.task
            const task = {
                id,
                name,
                status,
            }
            if (!task.id) {
                const id = state.length + 1
                task.id = id
                state.push(task)
            } else {
                const indexUpdate = findIndex(state, ['id', task.id])
                state[indexUpdate] = task
            }
            localStorage.setItem('data', JSON.stringify(state))
            return [...state];
        case types.PRODUCT_UPDATE_STATUS:
            const { id : idStatus } = action;
            const index = findIndex(state, ['id', idStatus])
            const { id: idUpdate, name: nameUpdate, status: statusUpdate} = state[index]
            state[index] = {
                id: idUpdate,
                name: nameUpdate,
                status: !statusUpdate,
            }
            localStorage.setItem('data', JSON.stringify(state))
            return [...state];
        case types.PRODUCT_DELETE:
            const { id : idProduct } = action;
            remove(state, ({ id }) => id === idProduct )
            localStorage.setItem('data', JSON.stringify(state))
            return [...state];

        default:
            return state;
    }
}

export default taskReducer;
