class CreateProduct {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(productData) {
        const productExists = await this.productsRepository.findByName(productData.name);

        if (productExists) {
            throw new Error('A product with this name already exists');
        }

        const validationErrors = this.productsRepository.validateRequiredFields(productData);

        if (validationErrors.length > 0) {
            throw new Error(validationErrors);
        }

        const product = await this.productsRepository.create(productData);

        return product;
    }
}

export default CreateProduct;
