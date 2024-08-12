//for initailes the Store
import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../component/slice/ProductSlice"; 
const store = configureStore({
  reducer: {
    cart: ProductSlice,
  },
});
export default store;
