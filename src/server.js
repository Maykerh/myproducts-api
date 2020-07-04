import express from 'express';
import cors from 'cors';

import 'dotenv/config';
import './infra/database';

import routes from './infra/routes';

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3000);
