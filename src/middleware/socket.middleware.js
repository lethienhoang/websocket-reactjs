import * as actions from "../actions/websocket.action";
import {
  messageSendedFail,
  messageSendedRequest,
  messageSendedSuccess,
} from "../actions/send.action";
import {
  WS_CONNECT,
  MESSAGE_SENDED_REQUEST,
  WS_DISCONNECTED,
} from "../constants";
import { userConnectFail, userConnectSuccess } from "../actions/client.action";

const socketMiddleware = () => {
  let socket = null;

  const onOpen = (store) => (event) => {
    store.dispatch(actions.wsConnected(event.tartget.url));
  };

  const onClose = (store) => () => {
    store.dispatch(actions.wsDisconnected());
  };

  const onMessage = (store) => (event) => {
    const payload = JSON.parse(event.data);
    console.log("receiving server message");

    if (payload == undefined) {
      store.dispatch(messageSendedFail());
    }

    switch (payload.type) {
      case "USER_CONNECT_SUCCESS":
        store.dispatch(userConnectSuccess(true));
        break;
      case "ROOM_CONNECT_SUCCESSS":
        store.dispatch({ type: ASSIGNED_ROOM_SUCCESS, payload: true });
        break;
      case "SEND_SUCCESS":
        store.dispatch(messageSendedSuccess(payload));
        break;
      case "USER_CONNECT_FAIL":
        store.dispatch(userConnectFail(true));
        break;
      case "ROOM_CONNECT_FAIL":
        break;
      case "SEND_FAIL":
        break;
      default:
        break;
    }
  };

  return (store) => (next) => (action) => {
    switch (action.type) {
      case WS_CONNECT:
        if (socket === null) {
          socket.close();
        }

        socket = new WebSocket(action.host);
        socket.onmessage = onMessage(store);
        socket.onclose = onClose(store);
        socket.onopen = onOpen(store);
        break;
      case WS_DISCONNECTED:
        if (socket !== null) {
          socket.close();
        }

        socket = null;
        break;
      case MESSAGE_SENDED_REQUEST:
        console.log("sending a message", action.msg);
        store.dispatch(messageSendedRequest());
        socket.send(JSON.stringify({ messages: action.msg }));
        break;
      default:
        return next(action);
    }
  };
};

export default socketMiddleware();
