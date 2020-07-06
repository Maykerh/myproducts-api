import { Router } from 'express';

import validateAuthentication from '../middlewares/validateAuthentication';

import ProductsRepository from '../../modules/products/repositories/ProductsRepository';

import CreateProduct from '../../modules/products/services/CreateProduct';
import UpdateProduct from '../../modules/products/services/UpdateProduct';
import DeleteProduct from '../../modules/products/services/DeleteProduct';
import ListProducts from '../../modules/products/services/listProducts';

const productsRouter = Router();

productsRouter.use(validateAuthentication);

productsRouter.get('/', async (req, res) => {
    try {
        const { name, description, category, page } = req.query;

        const listProducts = new ListProducts(new ProductsRepository());

        const productsList = await listProducts.execute({ name, description, category, page });

        return res.json(productsList);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

productsRouter.post('/', async (req, res) => {
    try {
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
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

productsRouter.put('/:id', async (req, res) => {
    try {
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
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

productsRouter.delete('/:id', async (req, res) => {
    try {
        const deleteProduct = new DeleteProduct(new ProductsRepository());

        await deleteProduct.execute(req.params.id);

        return res.send();
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

export default productsRouter;
