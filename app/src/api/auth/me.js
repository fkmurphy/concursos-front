import {request} from '../index';

export async function me () {
    request.defaults.headers['Authorization'] = 'Bearer ' + localStorage.token;
    return request.post("/me", null);
}
