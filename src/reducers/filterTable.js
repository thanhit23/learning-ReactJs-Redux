import * as types from '../consts/index'
const initState = {
    name: "",
    status: 0,
}

const filterProductReducer = (state = initState, { type, filter }) => {
    switch (type) {
        case types.PRODUCT_FILTER:
            return filter;
        default:
            return state;
    }
}

export default filterProductReducer;
