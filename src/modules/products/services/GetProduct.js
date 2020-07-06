import AppError from '../../../infra/errors/AppError';

class GetProduct {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(productId) {
        const product = await this.productsRepository.findByPk(productId);

        if (!product) {
            throw new AppError('Product not found');
        }

        return product;
    }
}

export default GetProduct;
