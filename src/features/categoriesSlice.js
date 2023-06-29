import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../utils/constants";
import {getProducts} from "./productsSlice";

export const getCategories = createAsyncThunk('categories/getCategories', async (_, thunkAPI) => {
    try {
        const res = await axios(`${BASE_URL}/categories`);
        return res.data;
    } catch (err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err)
    }
})

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(getCategories.fulfilled, (state, {payload}) => {
            state.list = payload;
        })

        builder.addCase(getCategories.rejected, (state, {payload}) => {
            state.isLoading = false;
        })
    }
})

export default categoriesSlice.reducer;