import * as types from '../consts/index'
const initState = {
    id: null,
    name: " ",
    status: false,
}

const editProductReducer = (state = initState, action) => {
    switch (action.type) {
        case types.EDIT_PRODUCT_ITEM:
            const { data  } = action;
            return data;
        case types.FORM_CLEAR:
            state = {
                id: null,
                name: '',
                status: false,
            }
            return state;
        default:
            return state;
    }
}

export default editProductReducer;
