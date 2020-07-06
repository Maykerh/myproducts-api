import Sequelize from 'sequelize';

import User from '../../modules/users/entities/User';
import Product from '../../modules/products/entities/Product';

import config from './sequelizeConfig';

const models = [User, Product];

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
