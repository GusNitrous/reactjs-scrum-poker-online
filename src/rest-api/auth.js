import {HttpError} from '../errors/http.error';
import {clearAuthData, setAuthData} from '../utils/auth';
import * as http from "../utils/http";

const {withAuth} = http;

/**
 * Authorize user and create voting room.
 */
export function register(userName) {
    return http.post({url: '/auth/register', data: {userName}})
        .then(({data}) => {
            setAuthData(data);
        }).catch((err) => Promise.reject(HttpError.fromAxios(err)));
}

/**
 * Doing logout user.
 */
export function logout() {
    return withAuth(http.post)({url: '/auth/logout'})
        .catch((err) => {
            const httpError = HttpError.fromAxios(err);
            console.log(httpError);
        })
        .finally(() => {
            clearAuthData();
        });
}
