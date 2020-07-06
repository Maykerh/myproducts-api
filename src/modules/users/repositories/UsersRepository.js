import User from '../entities/User';

class UsersRepository {
    /**
     * Creates a new user in database
     * @param {Object} userData user data
     */
    async create(userData) {
        return User.create(userData);
    }

    /**
     * Find a user by it's email
     * @param {String} email user email
     */
    async findByEmail(email) {
        return User.findOne({
            where: { email },
        });
    }
}

export default UsersRepository;
