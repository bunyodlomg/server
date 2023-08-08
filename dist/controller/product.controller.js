"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProduct = exports.getProduct = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let limit = req.query.limit || 10;
        let skip = req.query.skip || 0;
        const count = yield product_model_1.default.count();
        const req_title = req.body.title;
        const req_desc = req.body.description;
        const products = yield product_model_1.default.find({ title: { $regex: req_title ? req_title : "", $options: 'i' } }, { __v: 0, _id: 0, }, { sort: { id: 1 }, limit, skip });
        res.set('Access-Control-Allow-Origin', 'http://localhost:5173/');
        res.set({
            'Content-Type': 'application/json'
        });
        res.json({
            products,
            total: count,
            limit,
            skip
        });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
});
exports.getProduct = getProduct;
const searchProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const title = req.body.title;
        console.log(title);
        const product = yield product_model_1.default.find({ name: { $regex: /[A-Za-z0-9]*/, $options: 'i' } });
        res.json(product);
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
});
exports.searchProduct = searchProduct;
// export const createProduct = async (req: Request, res: Response) => {
//   try {
//     const product = await productModel.find({})
//     res.json(product);
//   } catch (error: any) {
//     res.status(400).send({ message: error.message });
//   }
// }
