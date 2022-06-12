import {withAuth} from "../helpers";
import {post} from "../http-client";

export const register = (userName) => post({url: '/auth/register', data: {userName}});

export const logout = () => withAuth(post)({url: '/auth/logout'});

