import {HttpError} from '../errors/http.error';
import {post, withAuth} from "../http-client";


export const register = (userName) => post({url: '/auth/register', data: {userName}}).catch(HttpError.fromAxios);

export const logout = () => withAuth(post)({url: '/auth/logout'}).catch(HttpError.fromAxios);

