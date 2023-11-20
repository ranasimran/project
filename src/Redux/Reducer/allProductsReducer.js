import { createSlice } from "@reduxjs/toolkit";
import { allProducts } from "../Action/allProductsAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};

const getProductAll = createSlice({
  name: "productdata",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(allProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null; // Reset error on pending
    });
    builder.addCase(allProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = null; // Reset error on fulfilled
    });
    builder.addCase(allProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message; // Set error message on rejected
    });
  },
});

export default getProductAll.reducer;
