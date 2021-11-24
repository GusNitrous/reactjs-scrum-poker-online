/**
 * MissingAuthDataError.
 */
export class MissingAuthDataError extends Error {
    constructor(name = 'MissingAuthData', message = '') {
        super(name, message);
    }
}
