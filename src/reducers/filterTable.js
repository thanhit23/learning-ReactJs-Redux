import * as types from "../consts/index"
const initState = {
    name: '',
    status: 0,
}

const filterProductReducer = (state = initState, { type, filter }) => {
    switch (type) {
        case types.FILTER_TASK:
            return filter;
        default:
            return state;
    }
}

export default filterProductReducer;
