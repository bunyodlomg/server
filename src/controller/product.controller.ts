import { Request, Response } from "express";
import productModel from "../models/product.model";

export const getProduct = async (req: Request, res: Response) => {
  try {
    let limit = (req.query.limit as any) || 10
    let skip = (req.query.skip as any) || 0
    const count = await productModel.count()
    const search = (req.query.search as any)
    const products = await productModel.find(
      { title: { $regex: search ? search : "", $options: 'i' } },
      { __v: 0, _id: 0, },
      { sort: { id: 1 }, limit, skip },
    );
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
    const product = await productModel.find({ name: { $regex: /[A-Za-z0-9]*/, $options: 'i' } })
    res.json(product);
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
}

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
