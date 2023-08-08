import { Request, Response } from "express";
import productModel from "../models/product.model";


export const getProduct = async (req: Request, res: Response) => {
  try {
    let limit = (req.query.limit as any) || 10
    let skip = (req.query.skip as any) || 0
    const count = await productModel.count()
    const req_title = (req.body.title as number)
    const req_desc = (req.body.description as number)
    const products = await productModel.find(
      { title: { $regex: req_title ? req_title : "", $options: 'i' } },
      { __v: 0, _id: 0, },
      { sort: { id: 1 }, limit, skip },
    );

    res.set('Access-Control-Allow-Origin', 'http://localhost:5173/')
    res.set({
      'Content-Type': 'application/json'
    });
    res.json({
      products,
      total: count,
      limit,
      skip
    });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
}

export const searchProduct = async (req: Request, res: Response) => {
  try {
    const title = (req.body.title as any)
    console.log(title);

    const product = await productModel.find({ name: { $regex: /[A-Za-z0-9]*/, $options: 'i' } })
    res.json(product);
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
}

// export const createProduct = async (req: Request, res: Response) => {
//   try {
//     const product = await productModel.find({})
//     res.json(product);
//   } catch (error: any) {
//     res.status(400).send({ message: error.message });
//   }
// }