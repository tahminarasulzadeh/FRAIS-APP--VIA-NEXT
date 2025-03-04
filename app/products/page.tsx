'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store/store';
import { setProducts, filterByCategory } from '../store/slices/productsSlice';
import { addToCart } from '../store/slices/cartSlice';
import Link from 'next/link';


export interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  popularity: number; // Add this if you want to filter by most popular
}

function Products() {
  const dispatch = useDispatch();
  const { filteredProducts, activeCategory } = useSelector(
    (state: RootState) => state.products
  )

  useEffect(() => {
    fetch('http://localhost:5001/api/products')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setProducts(data))
      });
  }, [dispatch])



  return (
    <div className="p-4">
      <h1 className="text-2xl text-start font-bold mb-4">{activeCategory}</h1>
      <p className="text-xl  text-start  w-[100%] lg:w-[50%] font-normal mb-4">
        This is your category description. It’s a great place to tell customers what this category is about, connect
        with your audience and draw attention to your products.
      </p>

      {/* Category Tabs */}
      <div className="flex space-x-4 mb-6">
        {['All Products', 'Soap', 'Candles', 'Most Popular'].map((category) => (
          <button
            key={category}
            className={`lg:px-4 lg:py-2 py-1 text-xs lg:text-md px-2 rounded ${activeCategory === category
              ? 'bg-[#5E5E4A] text-white'
              : 'bg-white border border-black hover:bg-[#5E5E4A] hover:text-white transition-all duration-300'
              }`}
            onClick={() => dispatch(filterByCategory(category))}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 mt-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded shadow justify-between flex-col transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <Link href={`/products/${product._id}`}>
              <div>
                <img
                  src={`http://localhost:5001${product.image}`}
                  alt={product.name}
                  width={600}
                  className="w-full h-48 object-cover mb-2"
                />
                <h2 className="text-xl font-semibold">{product.name}</h2>
              </div>
            </Link>

            <p className="text-gray-500">Category: {product.category}</p>
            <p className="text-green-500 font-bold">${product.price}</p>
            <button className="w-full p-2 mt-3 border-[1px] bg-white border-black hover:text-white hover:bg-[#5E5E4A] transition-all duration-300 ease-in"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Products