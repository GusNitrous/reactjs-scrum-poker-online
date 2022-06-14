export class NetworkError extends Error {
    constructor(message = 'Network Error', data = null) {
        super(message);
        this.data = data;
    }
}
