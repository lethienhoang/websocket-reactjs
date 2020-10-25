import { WS_CONNECTED } from "../constants";

const websocketInitialState = {connected = true};

export const websocketReducer = (state={...websocketInitialState}, action) => {
    switch (action.type) {
        case WS_CONNECTED:
            return {...state, connected: true};
        default:
            return state;
    }
}