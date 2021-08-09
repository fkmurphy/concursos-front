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
    }
})
//new FetchRequest({
//  prefix: `${CONFIG.API_HOST}/api`,
//  headers: {
//    'Content-Type': 'application/json',
//  },
//})
