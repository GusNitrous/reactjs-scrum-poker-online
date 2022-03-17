import axios from 'axios';
import {$authUser} from "../../models/auth";


export const request = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
});

export const get = ({url, config}) => request.get(url, config);

export const post = ({url, data, config}) => request.post(url, data, config);

export const withAuth = (httpMethod) => (options) => {
    const prop = 'config';
    const authHeaders = {headers: createAuthHeader()};
    options[prop] = !options[prop] ? authHeaders : {...options[prop], ...authHeaders};
    return httpMethod(options);
}

const createAuthHeader = (prefix = 'Bearer') => {
    const {jwtToken} = $authUser.getState() ?? {};
    if (!jwtToken) {
        throw new Error('Empty JWT token');
    }
    return {
        'Authorization': `${prefix} ${jwtToken}`
    }
}
