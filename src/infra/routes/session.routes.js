import { Router } from 'express';
import CreateSession from '../../modules/users/services/CreateSession';

const sessionRouter = Router();

sessionRouter.post('/', async (req, res) => {
    try {
        const createSession = new CreateSession();

        const session = await createSession.execute(req.body);

        return res.send(session);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

export default sessionRouter;
