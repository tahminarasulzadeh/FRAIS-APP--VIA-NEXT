'use client';

import { useEffect, useState } from 'react';
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
  popularity: number;
  featureOne: string;
}

function Products() {
  const dispatch = useDispatch();
  const { filteredProducts, activeCategory } = useSelector(
    (state: RootState) => state.products
  );

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch('http://localhost:5001/api/products')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setProducts(data));
      });
  }, [dispatch]);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Pagination logic for ellipsis
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // You can adjust this number

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, currentPage + 2);

      // Show first page
      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) pageNumbers.push('...');
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Show last page
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl text-start font-bold mb-4">{activeCategory}</h1>
      <p className="text-xl text-start w-[100%] lg:w-[50%] font-normal mb-4">
        This is your category description. It’s a great place to tell customers what this category is about, connect
        with your audience and draw attention to your products.
      </p>

      {/* Category Tabs */}
      <div className="flex space-x-4 mb-6">
        {['All Products', 'Soap', 'Candle', 'Most Popular'].map((category) => (
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
        {currentProducts.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded shadow justify-between flex-col transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <Link href={`/products/${product._id}`}>
              <div>
                <img
                  src={`http://localhost:5001${product.image}`}
                  alt={product.name}
                  width={550}
                  className="w-full h-[550px] object-cover mb-2"
                />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <h2 className="text-xl font-semibold">{product.featureOne}</h2>
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

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-2 mt-6">
        {getPageNumbers().map((pageNumber, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm ${currentPage === pageNumber
              ? 'bg-[#5E5E4A] text-white'
              : 'bg-white border border-black hover:bg-[#5E5E4A] hover:text-white transition-all duration-300'
              }`}
            onClick={() => {
              if (typeof pageNumber === 'number') {
                paginate(pageNumber);
              }
            }}
            disabled={typeof pageNumber === 'string'}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Products;
