export class HttpError extends Error {
    static fromResponse(response) {
        return new HttpError(
            response?.status,
            response?.statusText,
            response?.data,
        );
    }

    constructor(status, statusText, data) {
        super(statusText);
        this.status = status;
        this.data = data;
    }
}
