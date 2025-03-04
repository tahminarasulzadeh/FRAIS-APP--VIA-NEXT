import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/app/products/page';


interface CartState {
    items: Product[];
}

const initialState: CartState = {
    items: [],
}



const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            state.items.push(action.payload)
        },

        removeFromChart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item._id !== action.payload);
        },

        setCartItems: (state, action: PayloadAction<Product[]>) => {
            state.items = action.payload;
        },
    },

 

})

export const {addToCart, removeFromChart, setCartItems} = cartSlice.actions;
export default cartSlice.reducer;