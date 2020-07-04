import { sign } from 'jsonwebtoken';

import User from '../entities/User';

class CreateSession {
    async execute({ email, password }) {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            throw new Error('Email not found');
        }

        const passwordMatch = await user.checkPassword(password);

        if (!passwordMatch) {
            throw new Error('Wrong password');
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
