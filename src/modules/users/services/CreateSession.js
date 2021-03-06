import { sign } from 'jsonwebtoken';
import AppError from '../../../infra/errors/AppError';

class CreateSession {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    async execute({ email, password }) {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError('Email not found');
        }

        const passwordMatch = await user.checkPassword(password);

        if (!passwordMatch) {
            throw new AppError('Wrong password');
        }

        const { id, name } = user;

        return {
            user: { id, email, name },
            token: sign({ id: user.id }, process.env.APP_SECRET, {
                expiresIn: '1h',
            }),
        };
    }
}

export default CreateSession;
