import express from 'express';
import ProductsRoutes from './routes/productsRoute';
import UsersRoutes from './routes/userRoutes';
import OrdersRoutes from './routes/ordersRoute';

const app: express.Application = express();

app.use(express.json());

app.use('/products', ProductsRoutes);
app.use('/users', UsersRoutes);
app.use('/orders', OrdersRoutes);

export default app;
