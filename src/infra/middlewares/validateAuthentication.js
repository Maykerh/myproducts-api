import { verify } from 'jsonwebtoken';

export default function validateAuthentication(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new Error('Token not provided');
    }

    const token = authHeader.split(' ')[1];

    try {
        verify(token, process.env.APP_SECRET, (err, result) => {
            req.userId = result.id;
        });

        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
}
