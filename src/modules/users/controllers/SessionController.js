import CreateSession from '../services/CreateSession';
import UsersRepository from '../repositories/UsersRepository';
import validateAuthentication from '../../../infra/middlewares/validateAuthentication';

class SessionController {
    async create(req, res) {
        const createSession = new CreateSession(new UsersRepository());

        const session = await createSession.execute(req.body);

        return res.send(session);
    }

    async validate(req, res) {
        return res.status(200).send();
    }
}

export default SessionController;
