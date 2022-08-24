import * as types from '../consts/index'
const initState = ""

const searchReducer = (state = initState, { type, keyword }) => {
    switch (type) {
        case types.PRODUCT_SEARCH:
            return keyword;
        default:
            return state;
    }
}

export default searchReducer;
