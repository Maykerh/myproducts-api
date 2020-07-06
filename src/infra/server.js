import express from 'express';
import 'express-async-errors';
import 'dotenv/config';
import cors from 'cors';
import httpLogger from './httpLogger';
import errorHandler from './errors/errorHandler';
import routes from './routes';
import './database';

const server = express();

server.use(httpLogger);
server.use(cors());
server.use(express.json());
server.use(routes);
server.use(errorHandler);

server.listen(3000);
