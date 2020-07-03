import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
    res.send('Hello, its me ');
});

export default routes;
