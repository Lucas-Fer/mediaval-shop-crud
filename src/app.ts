import express from 'express';
import ProductsRoute from './routes/ProductsRoute';
import UserRoute from './routes/userRoute';
import OrdersRoute from './routes/OrdersRoute';

const app: express.Application = express();

app.use(express.json());

app.use('/products', ProductsRoute);
app.use('/users', UserRoute);
app.use('/orders', OrdersRoute);

export default app;
