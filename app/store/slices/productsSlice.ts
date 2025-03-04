// app/store/slices/productsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/app/products/page';;  // import Product type

interface ProductsState {
  products: Product[];
  filteredProducts: Product[];
  activeCategory: string;
}

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  activeCategory: 'All Products',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    filterByCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      state.activeCategory = category;

      if (category === 'All Products') {
        state.filteredProducts = state.products;
      } else if (category === 'Most Popular') {
        state.filteredProducts = [...state.products]
          .sort((a, b) => b.popularity - a.popularity)
          .slice(0, 5);
      } else {
        state.filteredProducts = state.products.filter(
          (product) => product.category === category
        );
      }
    },
  },
});

export const { setProducts, filterByCategory } = productsSlice.actions;
export default productsSlice.reducer;
