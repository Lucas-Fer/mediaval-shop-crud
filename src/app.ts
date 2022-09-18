import express from 'express';
import ProductsRoutes from './routes/productsRoute';

const app: express.Application = express();

app.use(express.json());

app.use('/products', ProductsRoutes);

export default app;
