import {request} from '../index';

export async function postulate(code) {
    request.defaults.headers['Authorization'] = 'Bearer ' + localStorage.token;
    return request.post("/postulations/" + code + "/postulate");
}
