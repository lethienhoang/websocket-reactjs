import {ASSIGNED_ROOM_REQUEST, ASSIGNED_ROOM_FAIL, ASSIGNED_ROOM_SUCCESS} from '../constants';
import API_URL_DEV from '../routes';
import { wsConnect } from './websocket.action';

const joinedToRoom = (roomId) => async (dispatch) => {
    try {
        dispatch({type: ASSIGNED_ROOM_REQUEST});
        const host = API_URL_DEV + `/room/${roomId}`;
        wsConnect(host);
        dispatch({type: ASSIGNED_ROOM_SUCCESS, payload: true});
    }
    catch(error) {
        dispatch({type: ASSIGNED_ROOM_FAIL, payload: error.message});
    }
}

export default joinedToRoom;