import morgan from 'morgan';
import fs from 'fs';
import path from 'path';

morgan.token('user-id', (req) => {
    return req.userId;
});

const logStream = fs.createWriteStream(path.join(__dirname, 'logs', 'http-requests.log'));

const morganInstance = morgan(
    '[:date[web]] <:user-id> :remote-addr :method :url - status :status :response-time ms',
    { stream: logStream }
);

export default morganInstance;
