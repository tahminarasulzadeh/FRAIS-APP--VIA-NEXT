'use client';

import FavoriteProducts from '@/app/AddProduct/FavoritePorducts/page';
import Accordion from '@/app/components/Accordion/page';
import React, { useState, useEffect } from 'react';

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
}

export default function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
  const [productData, setProductData] = useState<Product[] | null>(null);  // Handle as an array
  const [quantity, setQuantity] = useState<number>(0);  // Handle as an array


  const { productId } = React.use(params); // Unwrap the params promise



  console.log('productId', productId);

  useEffect(() => {
    if (!productId) return;

    fetch(`http://localhost:5001/api/products`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        return response.json();
      })
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  // Ensure productData is not null before using .find()
  const product = productData ? productData.find((p: Product) => p._id.toString() === productId) : null;

  if (!product) return <p>Loading...</p>;  // Loading state or message

  return (
    <div className="p-4 ">
      <div className="flex  gap-5 flex-col items-center lg:flex-row justify-center ">
        <div>
          <img
            src={`http://localhost:5001${product.image}`}
            alt={product.name}
            className="lg:w-[500px] lg:h-[800px] w-[350px] h-[500px] object-cover mb-4"
          />
        </div>
        <div className='flex w-[450px] gap-[10px] lg:p-0 p-20 flex-col'>
          <h1 className="text-2xl text-gray-500 text-start font-thin ">{product.name}</h1>
          <p className="text-gray-500 text-start font-thin  text-sm">Category: {product.category}</p>

          <p className="text-gray-500 text-2xl font-thin">${product.price}</p>
          <p className="text-gray-500 text-xl font-thin">Quantity</p>
          <div className='border-[1px] group flex items-center justify-evenly cursor-pointer w-[70px] py-1 border-gray-500 bg-transparent'>
            <p className='text-center'>{quantity}</p>
            <div className='flex opacity-0 group-hover:opacity-100 flex-col gap-[5px] transition-all duration-500 ease-in'>
              <IoIosArrowUp className="text-gray-500 text-sm font-thin" onClick={() => setQuantity( quantity + 1)} />
              <IoIosArrowDown className="text-gray-500 text-sm font-thin"  onClick={() => quantity > 0 && setQuantity( quantity - 1)}/>
            </div>
          </div>
          <button className='w-full p-2 mt-3 border-[1px] bg-white border-black hover:text-white hover:bg-[#5E5E4A]  transition-all duration-700 ease-in'>Add to Cart</button>
          <button className='w-full p-2 mt-3 border-[1px] hover:bg-white hover:border-black hover:text-[#5E5E4A]  text-white bg-[#5E5E4A]  transition-all duration-700 ease-in'>Buy Now</button>
                  <Accordion />
                  
        </div>
      </div>

      <FavoriteProducts/>
    </div>
  );
}
