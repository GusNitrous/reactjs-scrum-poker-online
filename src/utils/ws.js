import { io } from 'socket.io-client';
export function createWebSocket(token) {
    return io('http://localhost:9000', {auth: {token}});
}
