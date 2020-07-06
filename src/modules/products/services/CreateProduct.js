import AppError from '../../../infra/errors/AppError';

class CreateProduct {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(productData) {
        const productExists = await this.productsRepository.findByName(productData.name);

        if (productExists) {
            throw new AppError('A product with this name already exists', 400);
        }

        const validationErrors = this.productsRepository.validateRequiredFields(productData);

        if (validationErrors.length > 0) {
            throw new AppError(validationErrors, 400);
        }

        const product = await this.productsRepository.create(productData);

        return product;
    }
}

export default CreateProduct;
