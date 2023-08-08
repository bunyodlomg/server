import mongoose, { Schema } from "mongoose";
export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
}

const productSchema = new Schema<IProduct>({
    id: { type: Number, required: true },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: { type: Number, required: true }
})

const productModel = mongoose.model<IProduct>("products", productSchema)

export default productModel