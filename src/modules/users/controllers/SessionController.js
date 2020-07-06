import CreateSession from '../services/CreateSession';
import UsersRepository from '../repositories/UsersRepository';

class SessionController {
    async create(req, res) {
        const createSession = new CreateSession(new UsersRepository());

        const session = await createSession.execute(req.body);

        return res.send(session);
    }
}

export default SessionController;
