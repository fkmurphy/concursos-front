import {request} from '../index';

export async function getPostulations () {
    return request.get("/postulations/");
}
