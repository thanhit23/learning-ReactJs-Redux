import * as types from '../consts/index'
const initState = {
    by: null,
    value: null,
}

const sortReducer = (state = initState, { type, valueSort }) => {
    switch (type) {
        case types.PRODUCT_SORT:
            const { by, value } = valueSort
            return {
                by,
                value,
            };
        default:
            return state;
    }
}

export default sortReducer;
