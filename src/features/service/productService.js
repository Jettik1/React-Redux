import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../utils/constants";
import {buildUrl} from "../../utils/common";


export const productAPI = createApi({
    reducerPath: "productAPI",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
    tagTypes: ["Product"],
    endpoints: (build) => ({
        getProductById: build.query({
            query: ({id}) => `/products/${id}`,
            providesTags: ["Product"],
        }),
        getProducts: build.query({
            query: (params) => buildUrl('/products', params),
            providesTags: ["Products"],
        }),
    })
})

export const { useGetProductByIdQuery, useGetProductsQuery } = productAPI