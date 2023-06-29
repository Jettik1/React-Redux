import {configureStore} from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import productsSlice from "./productsSlice";


export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice
    },
    devTools: true,
});