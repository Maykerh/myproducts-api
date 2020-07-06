import AppError from './AppError';

export default (err, _req, res, _next) => {
    console.log('chegou');
    console.log(err);
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }

    console.error(err);

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
};
