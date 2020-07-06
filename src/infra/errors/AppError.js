class AppError {
    constructor(message, code = 400) {
        this.message = message;
        this.statusCode = code;
    }
}

export default AppError;
