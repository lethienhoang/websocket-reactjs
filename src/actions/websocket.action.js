import {WS_CONNECT, WS_CONNECTING, WS_DISCONNECT, WS_CONNECTED, WS_DISCONNECTED} from '../constants';

export const wsConnect = host => (dispatch) => {
    dispatch({type: WS_CONNECT, host});
}

export const wsConnecting = host => (dispatch) => {
    dispatch ({type: WS_CONNECTING, host});
}

export const wsConnected = host => (dispatch) => {
    dispatch ({type: WS_CONNECTED, host});
}

export const wsDisconnect = host => (dispatch) => {
    dispatch({type: WS_DISCONNECT, host});
}

export const wsDisconnected = host => (dispatch) => {
    dispatch({type: WS_DISCONNECTED, host});
}
