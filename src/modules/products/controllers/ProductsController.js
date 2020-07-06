import ListProducts from '../services/ListProducts';
import ProductsRepository from '../repositories/ProductsRepository';
import CreateProduct from '../services/CreateProduct';
import UpdateProduct from '../services/UpdateProduct';
import DeleteProduct from '../services/DeleteProduct';
import GetProduct from '../services/GetProduct';

class ProductsController {
    async index(req, res) {
        const { name, description, category, page } = req.query;

        const listProducts = new ListProducts(new ProductsRepository());

        const productsList = await listProducts.execute({ name, description, category, page });

        return res.json(productsList);
    }

    async show(req, res) {
        const { id } = req.params;

        const getProduct = new GetProduct(new ProductsRepository());

        const product = await getProduct.execute(id);

        return res.json(product);
    }

    async create(req, res) {
        const { name, description, category, price, quantity } = req.body;

        const createProduct = new CreateProduct(new ProductsRepository());

        const product = await createProduct.execute({
            name,
            description,
            category,
            price,
            quantity,
        });

        return res.send(product);
    }

    async update(req, res) {
        const { name, description, category, price, quantity } = req.body;

        const updateProduct = new UpdateProduct(new ProductsRepository());

        const product = await updateProduct.execute(req.params.id, {
            name,
            description,
            category,
            price,
            quantity,
        });

        return res.send(product);
    }

    async delete(req, res) {
        const deleteProduct = new DeleteProduct(new ProductsRepository());

        await deleteProduct.execute(req.params.id);

        return res.send();
    }
}

export default ProductsController;
