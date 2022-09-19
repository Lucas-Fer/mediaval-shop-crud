import { Router } from 'express';
import OrderController from '../controllers/ordersController';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getAll);

export default router;