import express from 'express';
import ProductsRoute from './routes/ProductsRoute';
import UserRoute from './routes/userRoute';

const app: express.Application = express();

app.use(express.json());

app.use('/products', ProductsRoute);
app.use('/users', UserRoute);
export default app;
