import {request} from '../../index';

export async function list(name) {
    request.defaults.headers['Authorization'] = 'Bearer ' + localStorage.token;
    return request.get("/" + name);
}
