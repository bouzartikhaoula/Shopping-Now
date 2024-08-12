import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    CartList: [],
  };

const ProductSlice =createSlice({
    name: "cart",
    initialState,
    reducers: {
      saveTodo: (state, action) => {
        state.CartList.push(action.payload);
      },
      // setCheck: (state,action)=>{
      //     state.CartList.map((todo)=>{
      //         if (action.payload=== todo.id) {
      //           return todo
                  
      //         }
      //     })
      // }
    },
  });
  export const {saveTodo,setCheck}= ProductSlice.actions
  export default ProductSlice.reducer
  