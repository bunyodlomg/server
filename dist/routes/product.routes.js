"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_controller_1 = require("./../controller/product.controller");
const express_1 = __importDefault(require("express"));
const productRouter = express_1.default.Router();
productRouter.get("/", product_controller_1.getProduct);
productRouter.post("/", product_controller_1.searchProduct);
exports.default = productRouter;
