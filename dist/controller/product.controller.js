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
        const search = req.query.search;
        const products = yield product_model_1.default.find({ title: { $regex: search ? search : "", $options: 'i' } }, { __v: 0, _id: 0, }, { sort: { id: 1 }, limit, skip });
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
        const product = yield product_model_1.default.find({ name: { $regex: /[A-Za-z0-9]*/, $options: 'i' } });
        res.json(product);
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
});
exports.searchProduct = searchProduct;
// import { GoSearch } from 'react-icons/go';
// import { useEffect, useState } from 'react';
// function App() {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/products/', {
//         method: "GET",
//       });
//       const result = await response.json()
//       console.log(result)
//       setData(result)
//     } catch (error) {
//       console.error(error.message);
//     }
//   };
//   fetchData();
//   }, []);
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await fetch('http://localhost:8000/products/', {
//   //         method: 'GET',
//   //       });
//   //       const result = await response.json();
//   //       setData(result);
//   //     } catch (error) {
//   //       console.error(error.message);
//   //     }
//   //   };
//   //   fetchData();
//   // }, []);
//   return (
//     <div className='app'>
//       <div className="search container m-10 w-[60%] h-16 flex items-center bg-[#5A5C66] relative">
//         <input className='w-full bg-inherit border-none p-2 m-3 mr-24 focus:outline-none text-xl text-slate-100' type="text" placeholder='Search...'>
//         </input>
//         <GoSearch className='absolute right-10 text-2xl' />
//       </div>
//       <div className="flex flex-col">
//         <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
//           <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
//             <div className="overflow-hidden">
//               <table className="min-w-full">
//                 <thead className="bg-white border-b">
//                   <tr>
//                     <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
//                       #
//                     </th>
//                     <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
//                       title
//                     </th>
//                     <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
//                       description
//                     </th>
//                     <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
//                       price
//                     </th>
//                   </tr>
//                 </thead>
//                 {/* {data && data.map(d => {
//                   return <tbody key={d.id}>
//                     <tr className="bg-gray-100 border-b">
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                       </td>
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                       </td>
//                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                       </td>
//                     </tr>
//                   </tbody>
//                 })} */}
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default App
