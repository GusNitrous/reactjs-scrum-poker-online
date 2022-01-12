import axios from 'axios';
import {$authUser} from "../../models/auth";


export const request = axios.create({
    baseURL: 'http://localhost:9000'
});

export const get = ({url, config}) => request.get(url, config);

export const post = ({url, data, config}) => request.post(url, data, config);

export const withAuth = (httpMethod) => {
    return (opt) => {
        const authHeaders = {headers: getAuthHeader()};
        const prop = 'config';
        opt[prop] = !opt[prop] ? authHeaders : {...opt[prop], ...authHeaders};
        return httpMethod(opt);
    }
}

const getAuthHeader = (prefix = 'Bearer') => {
    const {jwtToken} = $authUser.getState() ?? {};
    if (!jwtToken) {
        throw new Error('Empty auth token');
    }
    return {
        'Authorization': `${prefix} ${jwtToken}`
    }
}
