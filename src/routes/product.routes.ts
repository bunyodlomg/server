import { getProduct, searchProduct} from "./../controller/product.controller"
import express from "express"

const productRouter = express.Router()

productRouter.get("/", getProduct)
productRouter.post("/", searchProduct)

export default productRouter