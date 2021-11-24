import {io} from 'socket.io-client';
import {getAuthData} from '../../utils/auth';
import {MissingAuthDataError} from './errors/missing-auth-data.error';
import {wsConnection, wsError, wsException} from "../../models/ws/init";
import {CONNECTION, ERROR, EXCEPTION} from "./events";

let ws = null;

export function getSocket(recreate = false) {
    const {jwtToken} = getAuthData() ?? {};
    if (!jwtToken) {
        //TODO эмитить событие с ошибкой
        throw new MissingAuthDataError();
    }

    if (recreate || !ws) {
        ws = io('http://localhost:9000', {
            auth: {
                token: jwtToken
            }
        }).on(ERROR, wsError)
            .on(CONNECTION, wsConnection)
            .on(EXCEPTION, wsException);

    }

    return ws;
}
