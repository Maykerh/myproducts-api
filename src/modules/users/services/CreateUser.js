import User from '../entities/User';

class CreateUser {
    async execute({ name, email, password }) {
        const userExists = await User.findOne({
            where: { email },
        });

        if (userExists) {
            throw new Error('Email already used');
        }

        const user = await User.create({ name, email, password });

        return user;
    }
}

export default CreateUser;
