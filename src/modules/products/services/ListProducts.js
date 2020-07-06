class ListProducts {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }

    async execute(urlParams) {
        return this.productsRepository.listAll(urlParams);
    }
}

export default ListProducts;
