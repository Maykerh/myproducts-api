import AppError from '../../../infra/errors/AppError';

class CreateUser {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    async execute({ name, email, password }) {
        const userExists = await this.usersRepository.findByEmail(email);

        if (userExists) {
            throw new AppError('Email already in use');
        }

        const user = await this.usersRepository.create({ name, email, password });

        return user;
    }
}

export default CreateUser;
