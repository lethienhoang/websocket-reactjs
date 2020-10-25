import {
  ASSIGNED_USERNAME_FAIL,
  ASSIGNED_USERNAME_REQUEST,
  ASSIGNED_USERNAME_SUCCESS,
} from "../constants";

const clientReducer = (state = { isUserActive: false }, action) => {
  switch (action.type) {
    case ASSIGNED_USERNAME_REQUEST:
      return { loading: true };
    case ASSIGNED_USERNAME_SUCCESS:
      return { loading: false, isUserActive: action.payload };
    case ASSIGNED_USERNAME_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default clientReducer;
