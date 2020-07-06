import { createLogger, transports, format } from 'winston';
import path from 'path';

import AppError from './AppError';

const logger = createLogger({
    level: 'error',
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.errors({ stack: true }),
        format.prettyPrint(),
        format.metadata()
    ),
    transports: [
        new transports.File({
            filename: 'errors.log',
            dirname: path.join(__dirname, '..', 'logs'),
            level: 'error',
        }),
    ],
});

export default (err, _req, res, _next) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }

    logger.log('error', err);

    console.error(err);

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
};
