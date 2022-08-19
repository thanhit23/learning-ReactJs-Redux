import * as types from "../consts"
export const listAll = () => {
    return {
        type: types.listAll,
    }
}
export const addProduct = task => {
    return {
        type: types.addProduct,
        task,
    }
}
export const toggleForm = () => {
    return {
        type: types.toggleForm,
    }
}
export const openForm = () => {
    return {
        type: types.openForm,
    }
}
export const closeForm = () => {
    return {
        type: types.closeForm,
    }
}
export const updateStatus = id => {
    return {
        type: types.updateStatus,
        id,
    }
}
export const deleteProduct = id => {
    return {
        type: types.deleteProduct,
        id,
    }
}
export const updateProduct = id => {
    return {
        type: types.updateProduct,
        id,
    }
}
