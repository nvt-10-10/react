// src/redux/authThunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTop4Supplier, getTop9Supplier } from "../../../api";
const getTop4Suppliers = createAsyncThunk("/user/top-4", async (_, { rejectWithValue }) => {
  try {
    const response = await getTop4Supplier();
    if(response.success ){
      return response.data;
    }
    return null
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const getTop9Suppliers = createAsyncThunk("/user/top-9", async (page, { rejectWithValue }) => {
  try {
    const response = await getTop9Supplier(page);
    if(response.success ){
      
      return response.data;
    }
    return null
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const userThunk = {
  getTop4Suppliers,getTop9Suppliers
};
