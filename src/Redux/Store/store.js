// store.js
import { configureStore } from "@reduxjs/toolkit";
import getProductAllReducer from "../Reducer/allProductsReducer";

const store = configureStore({
  reducer: {
    productData: getProductAllReducer,
    // Add other reducers if any
  },
});

export default store;
