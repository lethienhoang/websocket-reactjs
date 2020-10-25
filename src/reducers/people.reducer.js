import {
  PEOPLE_LIST_FAIL,
  PEOPLE_LIST_SUCCESS,
  PEOPLE_LIST_REQUEST,
} from "../constants";

const peopleReducer = (state = { peoples: [] }, action) => {
  switch (action.type) {
    case PEOPLE_LIST_REQUEST:
      return { loading: true };
    case PEOPLE_LIST_SUCCESS:
      return { loading: false, peoples: [...peoples, action.payload] };
    case PEOPLE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default peopleReducer;