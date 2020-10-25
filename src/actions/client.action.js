const {
  ASSIGNED_USERNAME_REQUEST,
  ASSIGNED_USERNAME_SUCCESS,
} = require("../constants");

export const userConnectRequest = (userId) => (dispatch) => {
  dispatch({ type: ASSIGNED_USERNAME_REQUEST });
  const host = API_URL_DEV + `/users/${userId}`;
  wsConnect(host);
};

export const userConnectSuccess = (data) => (dispatch) => {
  dispatch({ type: ASSIGNED_USERNAME_SUCCESS, payload: data });
};

export const userConnectFail = (error) => (dispatch) => {
  dispatch({ type: ASSIGNED_ROOM_FAIL, payload: error.message });
};
