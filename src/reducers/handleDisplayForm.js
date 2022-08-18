import * as types from "../consts/index"

const initState = false
const disPlayFormReducer = (state = initState, action) => {
  switch (action.type) {
    case types.toggleForm:
      return !state;

    case types.openForm:
      return state = true;

    case types.closeForm:
      return state = false;

    default:
      return state;
  }
}

export default disPlayFormReducer;
