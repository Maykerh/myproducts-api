import { Router } from 'express';
import CreateUser from '../../modules/users/services/CreateUser';
import UsersRepository from '../../modules/users/repositories/UsersRepository';

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const createUser = new CreateUser(new UsersRepository());

        const user = await createUser.execute({ name, email, password });

        return res.send(user);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

export default usersRouter;
