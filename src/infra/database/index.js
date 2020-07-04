import Sequelize from 'sequelize';

import User from '../../modules/users/entities/User';

import config from './sequelizeConfig';

const models = [User];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(config);

        models.map((model) => model.init(this.connection));
    }
}

export default new Database();
