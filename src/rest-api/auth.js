import { HttpError } from '../errors/http.error';
import { http } from '../utils/http';
import { setAuthData } from '../utils/storage';
import { createWebSocket } from '../utils/ws';

/**
 * Authorize user and create voting room.
 */
export function auth(userName) {
    return http.post('/auth/register', {userName})
        .then(({data}) => {
            console.log(data);

            setAuthData(data);
            return new Promise((resolve, reject) => {
                 const ws = createWebSocket(data.jwtToken)
                    .on('exception', (err) => {
                        reject(err);
                    }).on('connect', () => {
                        ws.emit('CREATE_ROOM');
                    }).on('ROOM_CREATED', (roomId) => {
                        resolve({ws, roomId});
                    });
            });
        }).catch((err) => {
            return Promise.reject(HttpError.fromAxios(err));
        });
}
