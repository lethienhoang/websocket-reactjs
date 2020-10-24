import {
  ASSIGNED_USERNAME_FAIL,
  ASSIGNED_USERNAME_REQUEST,
  ASSIGNED_USERNAME_SUCCESS,
} from "../constants";

const clientReducer = (state = { hasAssigned: false }, action) => {
  switch (action.type) {
    case ASSIGNED_USERNAME_REQUEST:
      return { loading: true };
    case ASSIGNED_USERNAME_SUCCESS:
      return { loading: false, hasAssigned: action.payload };
    case ASSIGNED_USERNAME_FAIL:
      return { loading: false, error: action.payload };
  }
};

export default clientReducer;
