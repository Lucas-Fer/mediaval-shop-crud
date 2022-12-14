import { Router } from 'express';
import ProductController from '../controllers/ProductsController';

const router = Router();

const productController = new ProductController();

router.post('/', productController.create);
router.get('/', productController.list);

export default router;