import {request} from '../../index';

export async function create(data) {
    request.defaults.headers['Authorization'] = 'Bearer ' + localStorage.token;
    return request.post("/" + name, data);
}
