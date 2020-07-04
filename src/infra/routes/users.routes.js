import { Router } from 'express';
import CreateUser from '../../modules/users/services/CreateUser';

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const createUser = new CreateUser();

        const user = await createUser.execute({ name, email, password });

        return res.send(user);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

export default usersRouter;
