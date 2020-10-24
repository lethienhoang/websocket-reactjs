import Chat from "../components/chat.component";
import {
  MESSAGE_SENDED_FAIL,
  MESSAGE_SENDED_REQUEST,
  MESSAGE_SENDED_SUCCESS,
} from "../constants";

const sendReducer = (state = { chatMessages: [] }, action) => {
  switch (action.type) {
    case MESSAGE_SENDED_REQUEST:
      return { loading: true };
    case MESSAGE_SENDED_SUCCESS:
      return { loading: false, chatMessages: action.payload };
    case MESSAGE_SENDED_FAIL:
      return { loading: false, error: action.payload };
  }
};

export default sendReducer;