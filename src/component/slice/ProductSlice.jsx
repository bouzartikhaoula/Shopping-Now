import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    CartList: [],
    Quantity:1,
  };

const ProductSlice =createSlice({
    name: "cart",
    initialState,
    reducers: {
      saveTodo: (state, action) => {
        state.CartList.push(action.payload);
      },
      add: (state, action) => {
        state.Quantity++;
      },
      restord: (state, action) => {
        state.Quantity-- ;
      },
    },
  });
  export const {saveTodo,add,restord}= ProductSlice.actions
  export default ProductSlice.reducer
  