import {HttpError} from "./errors/http.error";
import {NetworkError} from "../../errors/network.error";
import {$authUser} from "../../models/auth";
import {networkError} from "../../models/app";
import {MissingAuthDataError} from "../../errors/missing-auth-data.error";


export const handleRequestError = ({response}) => {
    const requestError = !response ? new NetworkError() : HttpError.fromResponse(response);
    if (!requestError.status) {
        networkError(requestError);
    }
    return Promise.reject(requestError);
};

export const makeAuthHeader = (prefix = 'Bearer') => {
    const {jwtToken} = $authUser.getState() ?? {};
    if (!jwtToken) {
        throw new MissingAuthDataError();
    }
    return {
        'Authorization': `${prefix} ${jwtToken}`
    }
}

export const makeHttpRequest = (httpClient) => (config) => httpClient.request(config).catch(handleRequestError);

export const withAuth = (
    httpRequest,
    authHeader = makeAuthHeader(),
) => (options) => httpRequest({...options, headers: authHeader});
