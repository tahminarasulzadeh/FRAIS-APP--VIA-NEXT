'use client'

// MostPopular.tsx
import { useEffect,  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addToCart } from '../store/slices/cartSlice';
import { setProducts } from '../store/slices/productsSlice';
import Link from 'next/link';

export default function MostPopular() {
    const dispatch = useDispatch();
    const {filteredProducts} = useSelector(
        (state: RootState) => state.products
    )

    useEffect(() => {
      fetch('http://localhost:5001/api/products')
      .then(response => response.json())
      .then((data) => {
        dispatch(setProducts(data));
      })

        
    }, [dispatch]);

    const randomProducts = [...filteredProducts]
    .sort(() => 0.5 - Math.random()) // Shuffle the products
    .slice(0, 7); // Take the first 7 products



    return (
        <div className='bg-[#D7D7CB] p-16'>
            <h1 className='text-center md:text-[52px] text-[26px] leading-snug tracking-wider'>Most Popular</h1>
            <div className="overflow-x-auto w-full mt-3 whitespace-nowrap p-4">
                <div className="inline-flex gap-10">
                    {randomProducts.map((product, index) => (
                        <div
                            key={product._id || index}
                            className=" md:p-4 rounded-md  w-full md:w-[450px] bg-transparent flex flex-col justify-between transition-transform transform hover:scale-105  "
                        >
                            <div key={product._id} className=" p-4 rounded ">
                                <Link href={`/products/${product._id}`}>
                                    <div>
                                        <img
                                            src={`http://localhost:5001${product.image || '/placeholder.png'}`}
                                            alt={product.name || 'Product Image'}
                                            className="w-full h-48 object-cover mb-2"
                                        />
                                        <h2 className="text-xl font-semibold">{product.name}</h2>
                                    </div>
                                </Link>
                              
                               
                                <p className="text-gray-500">Category: {product.category}</p>
                                <p className="text-green-500 font-bold">${product.price}</p>

                                <button className='w-full p-2 mt-3 border-[1px] bg-[#D7D7CB] border-black hover:text-white hover:bg-[#5E5E4A]  transition-all duration-300 ease-in' onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
