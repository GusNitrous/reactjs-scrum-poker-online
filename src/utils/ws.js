import { io } from 'socket.io-client';
import { getAuthData } from './storage';


let ws = null;


export function getSocket(recreate = false) {
    const {jwtToken} = getAuthData();
    if (!jwtToken) {
        throw new Error('Auth token is missing');
    }

    if (recreate || !ws) {
        ws = io('http://localhost:9000', {auth: {token: jwtToken}});
    }

    return ws;
}
