import Axios from "axios";
import { axiosConfig } from "../axios.config";
import {
  MESSAGE_SENDED_FAIL,
  MESSAGE_SENDED_SUCCESS,
  MESSAGE_SENDED_REQUEST,
} from "../constants";
import {axiosConfig} from '../axios.config';
import axios from 'axios';

const sendMessages = (roomId, userId) => async (dispatch) => {
  try {
    dispatch({ type: MESSAGE_SENDED_REQUEST });
    const { data } = await axios.get(`${roomId}/${userId}`, axiosConfig);
    dispatch({ type: MESSAGE_SENDED_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MESSAGE_SENDED_FAIL, payload: error.message });
  }
};

export default sendMessages;