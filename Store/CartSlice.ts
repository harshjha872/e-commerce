import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface singleProduct {
  id: number;
  productImage: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  totalPrice: number;
  quantity: number;
}

// Define a type for the slice state
export interface productState {
  products: Array<singleProduct>;
}

// Define the initial state using that type
const initialState = {
  products: [],
} as productState;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addproduct: (state, action: PayloadAction<singleProduct>) => {
      const isProductExist = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (isProductExist) isProductExist.quantity += 1;
      else state.products.push(action.payload);
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.quantity++;
        product.totalPrice = product.productPrice * product.quantity;
      }
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product?.quantity === 1) {
        cartSlice.caseReducers.removeProduct(state, action);
        return;
      }
      if (product) {
        product.quantity--;
        product.totalPrice = product.productPrice * product.quantity;
      }
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    emptyCart(state) {
      state.products = [];
    },
  },
});

export const {
  addproduct,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
