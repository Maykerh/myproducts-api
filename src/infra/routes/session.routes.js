import { Router } from 'express';
import CreateSession from '../../modules/users/services/CreateSession';
import UsersRepository from '../../modules/users/repositories/UsersRepository';

const sessionRouter = Router();

sessionRouter.post('/', async (req, res) => {
    try {
        const createSession = new CreateSession(new UsersRepository());

        const session = await createSession.execute(req.body);

        return res.send(session);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

export default sessionRouter;
