import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../utils/constants";

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
        builder.addCase(getCategories.fulfilled, (state, {payload}) => {
            state.list = payload;
        })
    }
})

export default categoriesSlice.reducer;