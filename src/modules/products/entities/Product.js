import Sequelize, { Model } from 'sequelize';

class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: Sequelize.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    primaryKey: true,
                },
                name: Sequelize.STRING,
                description: Sequelize.TEXT,
                category: Sequelize.TEXT,
                price: Sequelize.FLOAT,
                quantity: Sequelize.INTEGER,
            },
            { sequelize }
        );

        return this;
    }
}

export default Product;
