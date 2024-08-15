import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    CartList: [],
    Quantity:0,
  };

const ProductSlice =createSlice({
    name: "cart",
    initialState,
    reducers: {
      saveTodo: (state, action) => {

      const itemExists = state.CartList.some((e) => e.id === action.payload.id);
  
      if (!itemExists) {
          state.CartList.push(action.payload);
      }
      state.Quantity++;
           },
           add: (state, action) => {
            const item = state.CartList.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            }
            state.Quantity++;
        },
        restord: (state, action) => {
            const item = state.CartList.find(item => item.id === action.payload.id);
            if (item && item.quantity > 0) {
                item.quantity -= 1;
            }
            state.Quantity--;
        },
    },
  });
  export const {saveTodo,add,restord}= ProductSlice.actions
  export default ProductSlice.reducer
  