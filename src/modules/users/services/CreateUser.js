class CreateUser {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    async execute({ name, email, password }) {
        const userExists = await this.usersRepository.findByEmail(email);

        if (userExists) {
            throw new Error('Email already used');
        }

        const user = await this.usersRepository.create({ name, email, password });

        return user;
    }
}

export default CreateUser;
