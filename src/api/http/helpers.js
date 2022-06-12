import axios from "axios";
import {HttpError} from "./errors/http.error";
import {NetworkError} from "../../errors/network.error";
import {$authUser} from "../../models/auth";
import {networkError} from "../../models/app";
import {MissingAuthDataError} from "../../errors/missing-auth-data.error";

const {jwtToken} = $authUser.getState() ?? {};


export const handleRequestError = (err) => {
    if (err instanceof axios) {
        return HttpError.fromAxios(err);
    }
    const error = new NetworkError();
    networkError(error);
    return error;
};

export const makeAuthHeader = (prefix = 'Bearer', authToken = jwtToken) => {
    if (!jwtToken) {
        throw new MissingAuthDataError();
    }
    return {
        'Authorization': `${prefix} ${jwtToken}`
    }
}

export const makeHttpRequest = (httpClient) => (config) => httpClient.request(config).catch(handleRequestError);

export const withAuth = (httpRequest, authHeader = makeAuthHeader()) => (options) => {
    const authHeaders = {headers: authHeader};
    if ('config' in options) {
        return httpRequest({...options['config'], ...authHeaders});
    }
    if ('method' in options) {
        return httpRequest({...options, ...authHeaders});
    }
    return httpRequest({config: authHeaders});
}
