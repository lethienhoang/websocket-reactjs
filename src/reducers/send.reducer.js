import {
  MESSAGE_SENDED_FAIL,
  MESSAGE_SENDED_REQUEST,
  MESSAGE_SENDED_SUCCESS,
} from "../constants";

const sendReducer = (state = { messages: [] }, action) => {
  switch (action.type) {
    case MESSAGE_SENDED_REQUEST:
      return { isTyping: true };
    case MESSAGE_SENDED_SUCCESS:
      return { isTyping: false, messages: [...state.messages, action.payload] };
    case MESSAGE_SENDED_FAIL:
      return { isTyping: false, error: action.payload };
    default:
      return state;
  }
};

export default sendReducer;
