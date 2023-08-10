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
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors = require('cors');
// import productModel from './models/product.model';
dotenv_1.default.config();
const port = process.env.PORT || 8080;
// const getData = async () => {
//     try {
//         const malumot = await fetch('https://dummyjson.com/products')
//         const data = await malumot.json()
//         productModel.create(data.products)
//         // console.log(data.products);
//     } catch (error: any) {
//         console.log(error.message);
//     }
// }
// getData()
function runServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(process.env.MONGO_URI);
            app_1.default.listen(port, () => {
                console.log("Your server is running on " + port + " port");
            });
        }
        catch (error) {
            console.log(error.message);
        }
    });
}
runServer();
