import {combineReducers, configureStore} from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import productsSlice from "./productsSlice";
import {productAPI} from "./service/productService";


const rootReducer = combineReducers({
    categories: categoriesSlice,
    products: productsSlice,
    [productAPI.reducerPath]: productAPI.reducer
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productAPI.middleware),
    devTools: true,
});