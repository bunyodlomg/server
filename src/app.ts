import express, { NextFunction, Request, Response } from 'express';
import productRouter from './routes/product.routes';
const app = express();
app.use(express.json());
const allowedOrigins:any = ['http://localhost:5173']; // Frontend domening URL manzili
app.use((req: Request, res: Response, next: NextFunction) => {
    const origin: any = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
app.use('/products', productRouter)
export default app