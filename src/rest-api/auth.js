import { HttpError } from '../errors/http.error';
import { http } from '../utils/http';
import { setAuthData } from '../utils/storage';

/**
 * Authorize user and create voting room.
 */
export function register(userName) {
    return http.post('/auth/register', {userName})
        .then(({data}) => {
            setAuthData(data);
        }).catch((err) => {
            return Promise.reject(HttpError.fromAxios(err));
        });
}
