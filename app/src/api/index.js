//import { CONFIG } from '../config'
//import FetchRequest from '../utils/request'
import axios from 'axios';

//export const limit = 10
export const API_URL = process.env.VUE_APP_API_HOST;

export const request = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        //'Access-Control-Allow-Methods': 'POST, GET',
        'Access-Control-Allow-Headers':'*',
        'cache-control': 'no-cache'
    },
})

request.interceptors.request.use((request) => {
    // todo insert token if exist
    return request;
}, (error) => {
    return Promise.reject(error);
});

request.interceptors.response.use((response) => {

    if(response.status === 401) {
        window.location = "/login";
    }
    return response;
}, (error) => {
    return Promise.reject(error);
});
//new FetchRequest({
//  prefix: `${CONFIG.API_HOST}/api`,
//  headers: {
//    'Content-Type': 'application/json',
//  },
//})
