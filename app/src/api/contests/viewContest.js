import {request} from '../index';

export async function viewContest(id) {
    request.defaults.headers['Authorization'] = 'Bearer ' + localStorage.token;
    return request.get("/contests/get-info/" + id);
}
