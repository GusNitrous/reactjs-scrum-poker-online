import {HttpError} from '../errors/http.error';
import * as http from "../http-client";

const {withAuth} = http;

/**
 * Register and authorize user.
 */
export const register = (userName) =>
     http.post({url: '/auth/register', data: {userName}})
        .catch((err) => Promise.reject(HttpError.fromAxios(err)));


/**
 * Doing logout user.
 */
export const logout = () =>
    withAuth(http.post)({url: '/auth/logout'})
        .catch((err) => Promise.reject(HttpError.fromAxios(err)));

