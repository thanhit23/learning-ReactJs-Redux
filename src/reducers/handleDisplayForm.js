import * as types from "../consts/index"
const initState = false

const disPlayFormReducer = (state = initState, action) => {
  switch (action.type) {
    case types.FORM_TOGGLE:
      return !state;

    case types.FORM_OPEN:
      return state = true;

    case types.FORM_CLOSE:
      return state = false;

    default:
      return state;
  }
}

export default disPlayFormReducer;
