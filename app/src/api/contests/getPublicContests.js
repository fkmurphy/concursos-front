import {request} from '../index';

export async function getPublicContests() {
    return request.get("/public");
}
