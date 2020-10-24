import {API_URL_DEV} from './routes';

export const axiosConfig = axios.create({
    baseURL:API_URL_DEV,
    timeout: 1000
})  