import * as types from '../consts'

export const listAll = () => {
    return {
        type: types.LIST_ALL,
    }
}
export const saveProduct = task => {
    return {
        type: types.PRODUCT_ADD_OR_UPDATE,
        task,
    }
}
export const openForm = () => {
    return {
        type: types.FORM_OPEN,
    }
}
export const closeForm = () => {
    return {
        type: types.FORM_CLOSE,
    }
}
export const updateStatus = id => {
    return {
        type: types.PRODUCT_UPDATE_STATUS,
        id,
    }
}
export const deleteProduct = id => {
    return {
        type: types.PRODUCT_DELETE,
        id,
    }
}
export const editProduct = data => {
    return {
        type: types.EDIT_PRODUCT_ITEM,
        data,
    }
}
export const clearForm = () => {
    return {
        type: types.FORM_CLEAR,
    }
}
export const filterProduct = filter => {
    return {
        type: types.PRODUCT_FILTER,
        filter,
    }
}
export const searchProduct = keyword => {
    return {
        type: types.PRODUCT_SEARCH,
        keyword,
    }
}
export const sortProduct = valueSort => {
    return {
        type: types.PRODUCT_SORT,
        valueSort,
    }
}
