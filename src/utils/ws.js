import { io } from 'socket.io-client';
import { getAuthData } from './storage';
import { MissingAuthDataError } from '../errors/missing-auth-data.error';

let ws = null;

export function getSocket(recreate = false) {
    const {jwtToken} = getAuthData() ?? {};
    if (!jwtToken) {
        throw new MissingAuthDataError();
    }

    if (recreate || !ws) {
        ws = io('http://localhost:9000', {auth: {token: jwtToken}});
    }

    return ws;
}
