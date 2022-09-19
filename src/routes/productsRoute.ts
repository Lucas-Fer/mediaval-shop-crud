import { Router } from 'express';
import ProductController from '../controllers/productsController';

const router = Router();

const productController = new ProductController();

router.post('/', productController.create);
router.get('/', productController.getAll);

export default router;