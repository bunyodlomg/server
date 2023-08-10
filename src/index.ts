import app from './app';
import mongoose from "mongoose";
import dotenv from "dotenv";
const cors = require('cors')
// import productModel from './models/product.model';

dotenv.config()
const port = process.env.PORT || 8080

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
async function runServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI as string)
        app.listen(port, () => {
            console.log("Your server is running on " + port + " port")
        })
    } catch (error: any) {
        console.log(error.message)
    }
}
runServer()
