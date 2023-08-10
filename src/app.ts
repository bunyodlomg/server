import express from 'express';
import productRouter from './routes/product.routes';
import cors from 'cors'
const app = express();
app.use(cors())
app.use(express.json());
app.use('/products', productRouter)
export default app