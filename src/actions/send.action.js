import {
  MESSAGE_SENDED_FAIL,
  MESSAGE_SENDED_SUCCESS,
  MESSAGE_SENDED_REQUEST,
} from "../constants";


export const messageSendedSuccess = (data) => (dispatch) => {
  dispatch({type: MESSAGE_SENDED_SUCCESS, payload: data});
}

export const messageSendedRequest = () => (dispatch) => {
  dispatch ({type: MESSAGE_SENDED_REQUEST});
}

export const messageSendedFail = () => (dispatch) => {
  dispatch ({type: MESSAGE_SENDED_FAIL});
}