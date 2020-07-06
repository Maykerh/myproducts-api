import CreateUser from '../services/CreateUser';
import UsersRepository from '../repositories/UsersRepository';

class UsersController {
    async create(req, res) {
        const { name, email, password } = req.body;

        const createUser = new CreateUser(new UsersRepository());

        const user = await createUser.execute({ name, email, password });

        return res.send(user);
    }
}

export default UsersController;
