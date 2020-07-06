import AppError from '../../../infra/errors/AppError';

class UpdateProduct {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(id, productData) {
        const product = await this.productsRepository.findByPk(id);

        if (!product) {
            throw new AppError('Product not found');
        }

        const validationErrors = this.productsRepository.validateRequiredFields(productData);

        if (validationErrors.length > 0) {
            throw new AppError(validationErrors);
        }

        const updatedProduct = await product.update(productData);

        return updatedProduct;
    }
}

export default UpdateProduct;
