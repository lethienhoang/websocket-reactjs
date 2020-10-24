import {ASSIGNED_ROOM_REQUEST, ASSIGNED_ROOM_FAIL, ASSIGNED_ROOM_SUCCESS} from '../constants';
import {axiosConfig} from '../axios.config';
import axios from 'axios';

const joinedToRoom = (roomId) => async (dispatch) => {
    try {
        dispatch({type: ASSIGNED_ROOM_REQUEST});
        const {data} = await axios.get(`/room/${roomId}`, axiosConfig);
        dispatch({type: ASSIGNED_ROOM_SUCCESS, payload: data});
    }
    catch(error) {
        dispatch({type: ASSIGNED_ROOM_FAIL, payload: error.message});
    }
}

export default joinedToRoom;