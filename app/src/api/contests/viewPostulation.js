import {request} from '../index';

export async function viewPostulation(id) {
    return request.get("/postulations/" + id + "/view");
}
