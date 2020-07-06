class DeleteProduct {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(id) {
        const product = await this.productsRepository.findByPk(id);

        if (!product) {
            throw new Error('Product not found');
        }

        await product.destroy();
    }
}

export default DeleteProduct;
