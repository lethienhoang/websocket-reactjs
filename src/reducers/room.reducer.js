import {ASSIGNED_ROOM_FAIL, ASSIGNED_ROOM_SUCCESS, ASSIGNED_ROOM_REQUEST} from '../constants';

const roomReducer =(state={hasJoinedRoom: false}, action) => {
    switch(action.type) {
        case ASSIGNED_ROOM_REQUEST:
            return {loading: true}
        case ASSIGNED_ROOM_SUCCESS:
            return {loading: false, hasJoinedRoom: action.payload }
        case ASSIGNED_ROOM_FAIL:
            return {loading: false, error: action.payload}
    }
}

export default roomReducer;