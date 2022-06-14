export class MissingAuthDataError extends Error {
    constructor(message = 'Missing auth data', data = null) {
        super(message);
        this.data = data;
    }
}
