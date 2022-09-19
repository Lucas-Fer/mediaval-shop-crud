import express from 'express';
import ProductsRoutes from './routes/productsRoute';
import UsersRoutes from './routes/userRoutes';

const app: express.Application = express();

app.use(express.json());

app.use('/products', ProductsRoutes);
app.use('/users', UsersRoutes);

export default app;
