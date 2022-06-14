import {NetworkError} from "../../../errors/network.error";

export class WsError extends NetworkError {
    constructor(message = 'common ws error', data = null) {
        super('WebSocket: ' + message, data);
    }
}
