import {io} from 'socket.io-client';
import {wsConnection, wsError, wsException} from "../../models/ws";
import {CONNECT, ERROR, EXCEPTION} from "./events";

let ws = null;

export function getSocket(token = null) {
    if (!ws) {
        ws = io(process.env.REACT_APP_API_BASE_URL, {
            transports: ["websocket"],
            autoConnect: true,
            auth: {token},
        })
            .on(CONNECT, () => {
                wsConnection(ws);
            })
            .on(ERROR, (err) => {
                wsError(err);
            })
            .on(EXCEPTION, (e) => {
                wsException(e);
            });
    }
    return ws;
}

export function closeSocket() {
    if (ws) {
        ws.close();
        ws = null;
    }
}
