import { Op } from 'sequelize';
import Product from '../entities/Product';

class ProductsRepository {
    /**
     * Creates a new product in database
     * @param {Object} productData product data
     */
    async create(productData) {
        return Product.create(productData);
    }

    /**
     * Find a product by it's id
     * @param {String} id product id
     */
    async findByPk(id) {
        return Product.findByPk(id);
    }

    /**
     * Finds a product by it's name
     * @param {String} name product name
     */
    async findByName(name) {
        return Product.findOne({
            where: { name },
        });
    }

    /**
     * Finds a list of products with pagination, based on query params
     * @param {Object} params params to filter by
     */
    async listAll(params) {
        const page = params.page || 1;
        const queryParams = {
            limit: 10,
            offset: (page - 1) * 10,
            where: {},
        };

        if (params.name) {
            queryParams.where.name = {
                [Op.iLike]: `%${params.name}%`,
            };
        }

        if (params.description) {
            queryParams.where.description = {
                [Op.iLike]: `%${params.description}%`,
            };
        }

        if (params.category) {
            queryParams.where.category = {
                [Op.iLike]: `%${params.category}%`,
            };
        }

        const productsList = await Product.findAndCountAll(queryParams);

        return productsList;
    }

    /**
     * Validates if the required fields are filled
     * @param {Object} productData product data
     */
    validateRequiredFields(productData) {
        const errors = [];
        const requiredFields = ['name', 'category', 'description', 'price', 'quantity'];

        requiredFields.forEach((field) => {
            if (!productData[field]) {
                errors.push(`${field} is required`);
            }
        });

        return errors;
    }
}

export default ProductsRepository;
