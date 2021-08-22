import {request} from './index';

export async function personRegister(data) {
    return request.post("/person-register", data);
}
