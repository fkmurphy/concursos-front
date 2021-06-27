import {request} from '../index';

export async function login (data) {
    return request.post("/login", data);
}
