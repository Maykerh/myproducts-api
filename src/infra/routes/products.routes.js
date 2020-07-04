import { Router } from 'express';

import validateAuthentication from '../middlewares/validateAuthentication';

const productsRouter = Router();

productsRouter.use(validateAuthentication);

productsRouter.get('/', async (req, res) => {
    try {
        return res.send('AUTHENTICATED !!!!');
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

export default productsRouter;
