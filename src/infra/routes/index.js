import { Router } from 'express';

import usersRouter from './users.routes';
import sessionRouter from './session.routes';
import productsRouter from './products.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/session', sessionRouter);
routes.use('/products', productsRouter);

export default routes;
