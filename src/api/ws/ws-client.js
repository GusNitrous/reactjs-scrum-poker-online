import {io} from 'socket.io-client';
import {wsConnection, wsError, wsException} from "../../models/ws";
import {CONNECT, ERROR, EXCEPTION} from "./events";

let ws = null;

export function getSocket(token = null) {
    const hasToken = Boolean(token);
    if (hasToken || !ws) {
        ws = io('http://localhost:9000', {
                autoConnect: hasToken,
                auth: {token},
            })
            .on(ERROR, (err) => {
                wsError(err);
            })
            .on(CONNECT, () => {
                wsConnection(ws);
            })
            .on(EXCEPTION, (e) => {
                wsException(e);
            });
    }
    return ws;
}
