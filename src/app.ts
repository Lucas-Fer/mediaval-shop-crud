import express from 'express';
import ProductsRoute from './routes/ProductsRoute';

const app: express.Application = express();

app.use(express.json());

app.use('/products', ProductsRoute);

export default app;
