import {HttpError} from '../errors/http.error';
import * as http from "../utils/http";

const {withAuth} = http;

/**
 * Authorize user and create voting room.
 */
export function register(userName) {
    return http.post({url: '/auth/register', data: {userName}})
        .catch((err) => Promise.reject(HttpError.fromAxios(err)));
}

/**
 * Doing logout user.
 */
export function logout() {
    return withAuth(http.post)({url: '/auth/logout'})
        .catch((err) => Promise.reject(HttpError.fromAxios(err)));
}
