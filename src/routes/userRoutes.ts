import { Router } from 'express';
import UserController from '../controllers/usersController';

const router = Router();

const usercontroller = new UserController();

router.post('/', usercontroller.create);

export default router;