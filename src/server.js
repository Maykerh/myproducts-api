import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import 'express-async-errors';
import 'dotenv/config';

import './infra/database';

import errorHandler from './infra/errors/ErrorHandler';

import routes from './infra/routes';

const server = express();

server.use(morgan('combined'));
server.use(cors());
server.use(express.json());
server.use(routes);
server.use(errorHandler);

server.listen(3000);
