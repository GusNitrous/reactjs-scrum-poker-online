import {io} from 'socket.io-client';
import {wsConnection, wsError, wsException} from "../../models/ws";
import {CONNECT, ERROR, EXCEPTION} from "./events";

let ws = null;

export function getSocket(recreate = false) {
    if (recreate || !ws) {
        ws = io('http://localhost:9000', {
                autoConnect: false,
                auth: {
                    token: null
                },
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
