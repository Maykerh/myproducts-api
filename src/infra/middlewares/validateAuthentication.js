import { verify } from 'jsonwebtoken';
import AppError from '../errors/AppError';

export default function validateAuthentication(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError('Token not provided', 401);
    }

    const token = authHeader.split(' ')[1];

    try {
        verify(token, process.env.APP_SECRET, (err, result) => {
            req.userId = result.id;
        });

        return next();
    } catch (err) {
        throw new AppError('Invalid token', 401);
    }
}
