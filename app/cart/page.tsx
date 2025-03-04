'use client'

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromChart } from '../store/slices/cartSlice';

import { RiDeleteBin5Line } from "react-icons/ri";


 function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart.items)

    const handleFromCart = (productId: string) => {
        dispatch(removeFromChart(productId))
    }

    
    return (
        <div className='p-4'>
            <h1 className='text-2xl font-bold mb-4'>Shopping Cart</h1>

            {
                cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (

                    <div>
                        {cart.map((item) => (

                            <div key={item._id} className='flex justify-between  items-center p-10'>
                                <img src={`http://localhost:5001${item.image}`} alt={item.name} className='w-[150px] h-[100p]' />
                                <div className=' flex flex-col gap-5'> 
                                <p className='text-xl'>{item.name}</p>
                                <p className='text-xl w-[350px]'>{item.description}</p>
                                
                                </div>
                                    
                              
                                <span className='text-xl'>${item.price}</span>
                             
                                <RiDeleteBin5Line  className='text-[30px]' onClick={() => handleFromCart(item._id)} />
                        
                            </div>


                        
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default Cart