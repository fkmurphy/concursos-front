import parseJwt from "@/api/auth/helpers/parseJwt.js";

export default function validToken(token) {
    let parse = parseJwt(token);
    if (parse.exp < Date.now()/1000) {
        return false;
    }
    return true;
}
