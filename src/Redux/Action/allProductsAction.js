import axios from "axios";
import { apiBasepath } from "../../Config/config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const axiosInstance = axios.create({
  baseURL: apiBasepath,
  headers: {
    "Content-type": "application / json",
  },
});
export const allProducts = createAsyncThunk(
  "productgetdata",
  async (payload) => {
    const data1 = await axiosInstance.get("products", payload);
    return data1.data;
  }
);
