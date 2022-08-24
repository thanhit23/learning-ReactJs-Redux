import { findIndex, remove } from 'lodash'

import * as types from '../consts/index'

const data = JSON.parse(localStorage.getItem('data'))
const initState = data ? data : []

const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.PRODUCT_ADD_OR_UPDATE:
            const task = action.task
            let {id} = task
            if (!id) {
                let {id: idTask = 0} = state.at(-1) || {}
                task.id = ++idTask
                state.push(task)
            } else {
                const indexUpdate = findIndex(state, ['id', id])
                state[indexUpdate] = task
            }
            localStorage.setItem('data', JSON.stringify(state))
            return [...state];
        case types.PRODUCT_UPDATE_STATUS: {
            const {id} = action;
            const index = findIndex(state, ['id', id])
            const {status} = state[index]
            state[index] = {
                status: !status,
                ...state[index]
            }
            localStorage.setItem('data', JSON.stringify(state))
            return [...state];
        }
        case types.PRODUCT_DELETE: {
            const {id: idProduct} = action;
            remove(state, ({id}) => id === idProduct)
            localStorage.setItem('data', JSON.stringify(state))
            return [...state];
        }
        default:
            return state;
    }
}

export default taskReducer;
